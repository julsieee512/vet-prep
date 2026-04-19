import { useProgress } from '../hooks/useProgress';
import styles from './Dashboard.module.css';

const SUBJECTS = [
  'physiology', 'anatomy', 'pathology', 'pharmacology', 'immunology',
  'bacteriology', 'virology', 'toxicology', 'parasitology', 'theriogenology',
  'clinical-pathology', 'diagnostic-imaging', 'surgery', 'nutrition', 'public-health'
];

export default function Dashboard() {
  const { getAllStats } = useProgress();
  const stats = getAllStats();

  const totalCorrect = stats.reduce((s, x) => s + x.correct, 0);
  const totalAnswered = stats.reduce((s, x) => s + x.total, 0);
  const overallPct = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : null;

  return (
    <div>
      <h1 className={styles.title}>Dashboard</h1>
      <p className={styles.sub}>NAVLE Preparation — Progress Overview</p>

      <div className={styles.cards}>
        <StatCard label="Questions Answered" value={totalAnswered} />
        <StatCard label="Overall Score" value={overallPct !== null ? `${overallPct}%` : '—'} />
        <StatCard label="Subjects Started" value={stats.length} />
        <StatCard label="Weak Areas" value={stats.filter(s => s.pct < 60).length} color="warn" />
      </div>

      {stats.length === 0 ? (
        <div className={styles.empty}>
          <p>No quiz data yet. Head to the <strong>Quiz</strong> section to get started.</p>
        </div>
      ) : (
        <div className={styles.section}>
          <h2>Performance by Subject</h2>
          <div className={styles.bars}>
            {SUBJECTS.map(subject => {
              const s = stats.find(x => x.subject === subject);
              if (!s) return (
                <div key={subject} className={styles.barRow}>
                  <span className={styles.barLabel}>{subject}</span>
                  <div className={styles.barTrack}>
                    <div className={styles.barEmpty}>Not started</div>
                  </div>
                </div>
              );
              const color = s.pct >= 80 ? '#2ecc71' : s.pct >= 60 ? '#f39c12' : '#e74c3c';
              return (
                <div key={subject} className={styles.barRow}>
                  <span className={styles.barLabel}>{subject}</span>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ width: `${s.pct}%`, background: color }} />
                  </div>
                  <span className={styles.barPct} style={{ color }}>{s.pct}%</span>
                  <span className={styles.barCount}>{s.correct}/{s.total}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {stats.filter(s => s.pct < 60).length > 0 && (
        <div className={styles.section}>
          <h2>Focus Areas (below 60%)</h2>
          <ul className={styles.weakList}>
            {stats.filter(s => s.pct < 60).map(s => (
              <li key={s.subject} className={styles.weakItem}>
                <span>{s.subject}</span>
                <span className={styles.weakPct}>{s.pct}%</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value, color }) {
  return (
    <div className={`${styles.card} ${color === 'warn' ? styles.cardWarn : ''}`}>
      <div className={styles.cardValue}>{value ?? '—'}</div>
      <div className={styles.cardLabel}>{label}</div>
    </div>
  );
}
