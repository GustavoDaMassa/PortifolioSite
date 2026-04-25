import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '../../components/Layout/Layout';
import { ModeToggle } from '../../components/Timeline/ModeToggle';
import { TimelineEntry } from '../../components/Timeline/TimelineEntry';
import { entries } from '../../data/trajetoria/index';
import styles from './Trajetoria.module.css';

function getPeriodKey(dateStr, t) {
  if (!dateStr) return '';
  const [year, month] = dateStr.split('-');
  if (!month) return year;
  const q = Math.ceil(parseInt(month, 10) / 3);
  return `${year} · ${t('trajetoria.quarter', { count: q })}`;
}

function groupByPeriod(entries, t) {
  const groups = [];
  let current = null;

  for (const entry of entries) {
    const key = getPeriodKey(entry.date, t);
    if (!current || current.key !== key) {
      current = { key, entries: [] };
      groups.push(current);
    }
    current.entries.push(entry);
  }

  return groups;
}

export const TrajetoriaContent = () => {
  const { t } = useTranslation();
  const [mode, setMode] = useState(() => localStorage.getItem('trajetoria-mode') || 'narrativo');

  const handleModeChange = (newMode) => {
    setMode(newMode);
    localStorage.setItem('trajetoria-mode', newMode);
  };

  const groups = groupByPeriod(entries, t);

  return (
    <main className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.title}>{t('trajetoria.title')}</h1>
        <p className={styles.description}>{t('trajetoria.description')}</p>
      </div>

      <div className={styles.toggleBar}>
        <ModeToggle mode={mode} onChange={handleModeChange} />
      </div>

      <div className={styles.timelineContainer}>
        <div className={styles.timeline}>
          {groups.map((group) => {
            const hasMarco = group.entries.some(e => e.type === 'marco');
            return (
              <div key={group.key} className={styles.periodGroup}>
                <div className={`${styles.periodDot} ${hasMarco ? styles.periodDotMarco : ''}`} />
                <div className={styles.periodHeader}>
                  <span className={styles.periodLabel}>{group.key}</span>
                </div>
                <div className={styles.periodEntries}>
                  {group.entries.map((entry) => (
                    <TimelineEntry key={entry.id} entry={entry} mode={mode} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export const Trajetoria = () => {
  return (
    <Layout>
      <TrajetoriaContent />
    </Layout>
  );
};
