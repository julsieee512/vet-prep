import { useState } from 'react';
import cases from '../data/clinical-cases/cases.json';
import { useProgress } from '../hooks/useProgress';
import styles from './ClinicalCases.module.css';

const DIFF_COLOR = { easy: '#2ecc71', intermediate: '#f39c12', advanced: '#e74c3c' };

export default function ClinicalCases() {
  const [active, setActive] = useState(null);
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [done, setDone] = useState(false);
  const { recordCaseComplete } = useProgress();

  function startCase(c) {
    setActive(c);
    setStep(0);
    setSelected(null);
    setAnswers([]);
    setDone(false);
  }

  function handleAnswer(i) {
    if (selected !== null) return;
    setSelected(i);
    const correct = i === active.steps[step].correct;
    setAnswers(prev => [...prev, { step, selected: i, correct }]);
  }

  function nextStep() {
    if (step + 1 >= active.steps.length) {
      const score = Math.round((answers.filter(a => a.correct).length / active.steps.length) * 100);
      recordCaseComplete(active.id, score);
      setDone(true);
    } else {
      setStep(s => s + 1);
      setSelected(null);
    }
  }

  function reset() { setActive(null); }

  if (!active) return (
    <div>
      <h1 className={styles.title}>Clinical Cases</h1>
      <p className={styles.sub}>Work through real-world clinical scenarios step by step.</p>
      <div className={styles.grid}>
        {cases.map(c => (
          <div key={c.id} className={styles.caseCard} onClick={() => startCase(c)}>
            <div className={styles.caseMeta}>
              <span className={styles.species}>{c.species}</span>
              <span className={styles.diff} style={{ color: DIFF_COLOR[c.difficulty] }}>{c.difficulty}</span>
            </div>
            <h3 className={styles.caseTitle}>{c.title}</h3>
            <p className={styles.caseSubject}>{c.subject}</p>
            <p className={styles.caseSignalment}>{c.signalment}</p>
          </div>
        ))}
      </div>
    </div>
  );

  if (done) {
    const score = Math.round((answers.filter(a => a.correct).length / active.steps.length) * 100);
    return (
      <div className={styles.doneBox}>
        <h2>Case Complete: {active.title}</h2>
        <div className={styles.score}>{score}%</div>
        <div className={styles.summary}>
          <h3>Summary & Key Points</h3>
          <p>{active.summary}</p>
        </div>
        <button className={styles.btn} onClick={reset}>Back to Cases</button>
      </div>
    );
  }

  const current = active.steps[step];
  return (
    <div>
      <button className={styles.backBtn} onClick={reset}>← All Cases</button>

      <div className={styles.caseHeader}>
        <h2>{active.title}</h2>
        <span className={styles.stepCount}>Step {step + 1} / {active.steps.length}</span>
      </div>

      {step === 0 && (
        <div className={styles.signalmentBox}>
          <p><strong>Signalment:</strong> {active.signalment}</p>
          <p><strong>Chief Complaint:</strong> {active.presenting_complaint}</p>
          <p><strong>History:</strong> {active.history}</p>
        </div>
      )}

      <div className={styles.card}>
        <p className={styles.prompt}>{current.prompt}</p>
        <div className={styles.options}>
          {current.options.map((opt, i) => {
            let cls = styles.option;
            if (selected !== null) {
              if (i === current.correct) cls = `${styles.option} ${styles.correct}`;
              else if (i === selected && i !== current.correct) cls = `${styles.option} ${styles.wrong}`;
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
            <strong>{selected === current.correct ? 'Correct!' : 'Incorrect.'}</strong>
            <p>{current.explanation}</p>
            <button className={styles.btn} onClick={nextStep}>
              {step + 1 >= active.steps.length ? 'Finish Case' : 'Next Step →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
