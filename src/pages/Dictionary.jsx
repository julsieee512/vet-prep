import { useState, useMemo } from 'react';
import abbreviations from '../data/abbreviations.json';
import styles from './Dictionary.module.css';

const CATEGORIES = ['All', ...Array.from(new Set(abbreviations.map(a => a.category))).sort()];

export default function Dictionary() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return abbreviations.filter(a => {
      const matchCat = category === 'All' || a.category === category;
      const matchSearch = !q || a.abbr.toLowerCase().includes(q) || a.full.toLowerCase().includes(q) || a.dutch.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [search, category]);

  return (
    <div>
      <h1 className={styles.title}>Medical Abbreviations Dictionary</h1>
      <p className={styles.sub}>English abbreviations with Dutch equivalents — bridging your Ghent training to NAVLE terminology.</p>

      <div className={styles.controls}>
        <input
          className={styles.search}
          placeholder="Search abbreviation, English, or Dutch…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select className={styles.catSelect} value={category} onChange={e => setCategory(e.target.value)}>
          {CATEGORIES.map(c => <option key={c}>{c}</option>)}
        </select>
      </div>

      <p className={styles.count}>{filtered.length} entries</p>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Abbreviation</th>
              <th>English (Full)</th>
              <th>Nederlands</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(a => (
              <tr key={a.abbr + a.full}>
                <td className={styles.abbr}>{a.abbr}</td>
                <td>{a.full}</td>
                <td className={styles.dutch}>{a.dutch}</td>
                <td><span className={styles.tag}>{a.category}</span></td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={4} className={styles.noResults}>No results. Ask Claude to add this abbreviation!</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
