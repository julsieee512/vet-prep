import { useState, useEffect, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './StudyNotes.module.css';

const SUBJECTS = [
  'physiology', 'anatomy', 'pathology', 'pharmacology', 'immunology',
  'bacteriology', 'virology', 'toxicology', 'parasitology', 'theriogenology',
  'clinical-pathology', 'diagnostic-imaging', 'surgery', 'clinical-skills',
  'nutrition', 'public-health'
];

const LEVELS = {
  core: { emoji: '🔴', label: 'Core', className: 'core' },
  important: { emoji: '🟡', label: 'Important', className: 'important' },
  detail: { emoji: '🟢', label: 'Detail', className: 'detail' },
};

async function loadNotes(subject) {
  try {
    const mod = await import(`../data/subjects/${subject}/notes.md?raw`);
    return mod.default;
  } catch {
    return null;
  }
}

function splitChapters(markdown) {
  if (!markdown) return { intro: '', chapters: [] };
  const lines = markdown.split('\n');
  const chapters = [];
  let intro = [];
  let current = null;

  for (const line of lines) {
    const match = line.match(/^##\s+(.+?)\s*$/);
    if (match) {
      if (current) chapters.push(current);
      current = { title: match[1].trim(), body: [] };
    } else if (current) {
      current.body.push(line);
    } else {
      intro.push(line);
    }
  }
  if (current) chapters.push(current);

  return {
    intro: intro.join('\n').trim(),
    chapters: chapters.map(c => ({
      title: c.title,
      content: `## ${c.title}\n${c.body.join('\n')}`.trim(),
    })),
  };
}

function extractText(node) {
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (node?.props?.children) return extractText(node.props.children);
  return '';
}

function detectLevel(node) {
  const text = extractText(node);
  if (text.includes('🔴')) return 'core';
  if (text.includes('🟡')) return 'important';
  if (text.includes('🟢')) return 'detail';
  return null;
}

export default function StudyNotes() {
  const [subject, setSubject] = useState('physiology');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [chapterIdx, setChapterIdx] = useState(0);

  useEffect(() => {
    setLoading(true);
    loadNotes(subject).then(c => {
      setContent(c);
      setLoading(false);
      setChapterIdx(0);
    });
  }, [subject]);

  const { intro, chapters } = useMemo(() => splitChapters(content), [content]);
  const activeContent = chapters[chapterIdx]?.content || intro;

  const components = useMemo(() => {
    const wrap = (Tag) => ({ node, children, ...props }) => {
      const level = detectLevel(children);
      const cls = level ? styles[LEVELS[level].className] : '';
      return <Tag className={cls} {...props}>{children}</Tag>;
    };
    return {
      li: wrap('li'),
      p: wrap('p'),
      h3: wrap('h3'),
      h4: wrap('h4'),
      a: ({ node, children, ...props }) => (
        <a target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
      ),
      img: ({ node, src, ...props }) => {
        const resolved = /^https?:\/\//.test(src)
          ? src
          : `${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`;
        return <img src={resolved} {...props} />;
      },
    };
  }, []);

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <h3 className={styles.sidebarTitle}>Subjects</h3>
        {SUBJECTS.map(s => (
          <button
            key={s}
            className={`${styles.subjectBtn} ${subject === s ? styles.active : ''}`}
            onClick={() => setSubject(s)}
          >
            {s.replace('-', ' ')}
          </button>
        ))}
      </aside>

      <div className={styles.noteArea}>
        {chapters.length > 0 && (
          <div className={styles.chapterTabs}>
            {intro && (
              <button
                className={`${styles.chapterTab} ${chapterIdx === -1 ? styles.chapterActive : ''}`}
                onClick={() => setChapterIdx(-1)}
              >
                Overview
              </button>
            )}
            {chapters.map((c, i) => (
              <button
                key={i}
                className={`${styles.chapterTab} ${chapterIdx === i ? styles.chapterActive : ''}`}
                onClick={() => setChapterIdx(i)}
              >
                {c.title}
              </button>
            ))}
          </div>
        )}

        {loading && <p className={styles.loading}>Loading…</p>}
        {!loading && content === null && (
          <div className={styles.empty}>
            <h2>No notes yet for <em>{subject}</em></h2>
            <p>Ask Claude to write study notes for this subject and they will appear here.</p>
          </div>
        )}
        {!loading && content !== null && (
          <div className={styles.markdown}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
              {chapterIdx === -1 ? intro : activeContent}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
