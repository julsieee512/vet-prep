import { useState, useEffect } from 'react';
import { sm2, isDue } from '../utils/sm2';
import { useProgress } from '../hooks/useProgress';
import styles from './Flashcards.module.css';

const SUBJECTS = [
  'physiology', 'anatomy', 'pathology', 'pharmacology', 'immunology',
  'bacteriology', 'virology', 'toxicology', 'parasitology', 'theriogenology',
  'clinical-pathology', 'diagnostic-imaging', 'surgery', 'nutrition', 'public-health'
];

async function loadCards(subject) {
  try {
    const mod = await import(`../data/subjects/${subject}/flashcards.json`);
    return mod.default;
  } catch {
    return [];
  }
}

const QUALITY_LABELS = ['Blackout', 'Wrong', 'Hard', 'OK', 'Good', 'Perfect'];
const QUALITY_COLORS = ['#e74c3c', '#e74c3c', '#f39c12', '#f39c12', '#2ecc71', '#2ecc71'];

export default function Flashcards() {
  const [subject, setSubject] = useState('');
  const [cards, setCards] = useState([]);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [mode, setMode] = useState('select');
  const [done, setDone] = useState(false);
  const { progress, recordFlashcard } = useProgress();

  async function startDeck(s) {
    const all = await loadCards(s);
    if (all.length === 0) {
      alert('No flashcards for this subject yet. Ask Claude to add them!');
      return;
    }
    const withProgress = all.map(c => ({ ...c, ...(progress.flashcards?.[c.id] || {}) }));
    const due = withProgress.filter(isDue);
    if (due.length === 0) {
      alert('All cards reviewed! Come back later for spaced repetition.');
      return;
    }
    setSubject(s);
    setCards(due.sort(() => Math.random() - 0.5));
    setIdx(0);
    setFlipped(false);
    setDone(false);
    setMode('deck');
  }

  function rate(quality) {
    const card = cards[idx];
    const result = sm2(card, quality);
    recordFlashcard(card.id, result);
    if (idx + 1 >= cards.length) {
      setDone(true);
    } else {
      setIdx(i => i + 1);
      setFlipped(false);
    }
  }

  if (mode === 'select') return (
    <div>
      <h1 className={styles.title}>Flashcards</h1>
      <p className={styles.sub}>Spaced repetition — cards due for review are shown first.</p>
      <div className={styles.grid}>
        {SUBJECTS.map(s => (
          <button key={s} className={styles.subjectCard} onClick={() => startDeck(s)}>
            {s.replace('-', ' ')}
          </button>
        ))}
      </div>
    </div>
  );

  if (done) return (
    <div className={styles.done}>
      <h2>Deck Complete</h2>
      <p>All due cards reviewed for <strong>{subject}</strong>.</p>
      <p className={styles.doneSub}>Cards will reappear based on your ratings.</p>
      <button className={styles.btn} onClick={() => setMode('select')}>Back</button>
    </div>
  );

  const card = cards[idx];
  return (
    <div>
      <button className={styles.backBtn} onClick={() => setMode('select')}>← Back</button>
      <div className={styles.meta}>
        <span>{subject.replace('-', ' ')}</span>
        <span>{idx + 1} / {cards.length} due</span>
      </div>

      <div className={`${styles.card} ${flipped ? styles.flipped : ''}`} onClick={() => setFlipped(f => !f)}>
        <div className={styles.cardInner}>
          <div className={styles.front}>
            <span className={styles.hint}>tap to reveal</span>
            <p className={styles.cardText}>{card.front}</p>
          </div>
          <div className={styles.back}>
            <p className={styles.cardText}>{card.back}</p>
          </div>
        </div>
      </div>

      {flipped && (
        <div className={styles.ratingRow}>
          <p className={styles.ratingLabel}>How well did you know this?</p>
          <div className={styles.ratings}>
            {QUALITY_LABELS.map((label, i) => (
              <button
                key={i}
                className={styles.ratingBtn}
                style={{ borderColor: QUALITY_COLORS[i], color: QUALITY_COLORS[i] }}
                onClick={() => rate(i)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
