import { useState, useEffect } from 'react';
import { useProgress } from '../hooks/useProgress';
import styles from './Quiz.module.css';

const SUBJECTS = [
  'physiology', 'anatomy', 'pathology', 'pharmacology', 'immunology',
  'bacteriology', 'virology', 'toxicology', 'parasitology', 'theriogenology',
  'clinical-pathology', 'diagnostic-imaging', 'surgery', 'nutrition', 'public-health'
];

async function loadQuestions(subject) {
  try {
    const mod = await import(`../data/subjects/${subject}/questions.json`);
    return mod.default;
  } catch {
    return [];
  }
}

export default function Quiz() {
  const [subject, setSubject] = useState('');
  const [questions, setQuestions] = useState([]);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [sessionStats, setSessionStats] = useState({ correct: 0, total: 0 });
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState('select'); // select | quiz | done
  const { recordQuizAnswer, getSubjectStats } = useProgress();

  async function startQuiz(s) {
    setLoading(true);
    const qs = await loadQuestions(s);
    if (qs.length === 0) {
      alert('No questions available for this subject yet. Ask Claude to add them!');
      setLoading(false);
      return;
    }
    const shuffled = [...qs].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setSubject(s);
    setIdx(0);
    setSelected(null);
    setSessionStats({ correct: 0, total: 0 });
    setMode('quiz');
    setLoading(false);
  }

  function handleAnswer(i) {
    if (selected !== null) return;
    setSelected(i);
    const correct = i === questions[idx].correct;
    recordQuizAnswer(subject, questions[idx].id, correct);
    setSessionStats(prev => ({ correct: prev.correct + (correct ? 1 : 0), total: prev.total + 1 }));
  }

  function next() {
    if (idx + 1 >= questions.length) {
      setMode('done');
    } else {
      setIdx(i => i + 1);
      setSelected(null);
    }
  }

  if (mode === 'select') return (
    <div>
      <h1 className={styles.title}>Quiz</h1>
      <p className={styles.sub}>Select a subject to start a quiz session.</p>
      <div className={styles.grid}>
        {SUBJECTS.map(s => {
          const stats = getSubjectStats(s);
          return (
            <button key={s} className={styles.subjectCard} onClick={() => startQuiz(s)} disabled={loading}>
              <span className={styles.subjectName}>{s.replace('-', ' ')}</span>
              {stats && (
                <span className={styles.subjectPct} style={{ color: stats.pct >= 80 ? '#2ecc71' : stats.pct >= 60 ? '#f39c12' : '#e74c3c' }}>
                  {stats.pct}% ({stats.total} answered)
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );

  if (mode === 'done') return (
    <div className={styles.done}>
      <h2>Session Complete</h2>
      <p className={styles.score}>{sessionStats.correct} / {sessionStats.total} correct</p>
      <p className={styles.scorePct}>{Math.round((sessionStats.correct / sessionStats.total) * 100)}%</p>
      <button className={styles.btn} onClick={() => setMode('select')}>Back to Subjects</button>
      <button className={styles.btn} onClick={() => startQuiz(subject)}>Retry {subject}</button>
    </div>
  );

  const q = questions[idx];
  return (
    <div>
      <div className={styles.header}>
        <span className={styles.subjectTag}>{subject.replace('-', ' ')}</span>
        <span className={styles.counter}>{idx + 1} / {questions.length}</span>
        <span className={styles.sessionScore}>Session: {sessionStats.correct}/{sessionStats.total}</span>
      </div>

      <div className={styles.card}>
        <p className={styles.question}>{q.question}</p>
        <div className={styles.options}>
          {q.options.map((opt, i) => {
            let cls = styles.option;
            if (selected !== null) {
              if (i === q.correct) cls = `${styles.option} ${styles.correct}`;
              else if (i === selected) cls = `${styles.option} ${styles.wrong}`;
            }
            return (
              <button key={i} className={cls} onClick={() => handleAnswer(i)}>
                <span className={styles.optLetter}>{['A','B','C','D'][i]}</span>
                {opt}
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className={styles.explanation}>
            <strong>{selected === q.correct ? 'Correct!' : 'Incorrect.'}</strong>
            <p>{q.explanation}</p>
            <button className={styles.btn} onClick={next}>
              {idx + 1 >= questions.length ? 'See Results' : 'Next Question'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
