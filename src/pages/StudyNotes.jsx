import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './StudyNotes.module.css';

const SUBJECTS = [
  'physiology', 'anatomy', 'pathology', 'pharmacology', 'immunology',
  'bacteriology', 'virology', 'toxicology', 'parasitology', 'theriogenology',
  'clinical-pathology', 'diagnostic-imaging', 'surgery', 'nutrition', 'public-health'
];

async function loadNotes(subject) {
  try {
    const mod = await import(`../data/subjects/${subject}/notes.md?raw`);
    return mod.default;
  } catch {
    return null;
  }
}

export default function StudyNotes() {
  const [subject, setSubject] = useState('physiology');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    loadNotes(subject).then(c => {
      setContent(c);
      setLoading(false);
    });
  }, [subject]);

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
        {loading && <p className={styles.loading}>Loading…</p>}
        {!loading && content === null && (
          <div className={styles.empty}>
            <h2>No notes yet for <em>{subject}</em></h2>
            <p>Ask Claude to write study notes for this subject and they will appear here.</p>
          </div>
        )}
        {!loading && content !== null && (
          <div className={styles.markdown}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
