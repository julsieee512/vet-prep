import { NavLink } from 'react-router-dom';
import styles from './Layout.module.css';

const NAV = [
  { to: '/', label: 'Dashboard', icon: '📊' },
  { to: '/notes', label: 'Study Notes', icon: '📖' },
  { to: '/quiz', label: 'Quiz', icon: '✏️' },
  { to: '/flashcards', label: 'Flashcards', icon: '🗂️' },
  { to: '/cases', label: 'Clinical Cases', icon: '🏥' },
  { to: '/dictionary', label: 'Dictionary', icon: '📚' },
];

export default function Layout({ children }) {
  return (
    <div className={styles.shell}>
      <nav className={styles.sidebar}>
        <div className={styles.logo}>VetPrep</div>
        {NAV.map(n => (
          <NavLink
            key={n.to}
            to={n.to}
            end={n.to === '/'}
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
          >
            <span className={styles.icon}>{n.icon}</span>
            {n.label}
          </NavLink>
        ))}
      </nav>
      <main className={styles.content}>{children}</main>
    </div>
  );
}
