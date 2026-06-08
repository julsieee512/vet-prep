import { useState, useCallback } from 'react';

const STORAGE_KEY = 'vet_progress';

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function save(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function useProgress() {
  const [progress, setProgress] = useState(load);

  const recordQuizAnswer = useCallback((subject, questionId, correct) => {
    setProgress(prev => {
      const updated = { ...prev };
      if (!updated.quiz) updated.quiz = {};
      if (!updated.quiz[subject]) updated.quiz[subject] = { history: [] };
      if (!updated.quiz[subject].history) updated.quiz[subject].history = [];
      updated.quiz[subject].history.push({ questionId, correct, date: new Date().toISOString() });
      save(updated);
      return updated;
    });
  }, []);

  const computeStats = (subjectData) => {
    if (!subjectData?.history?.length) return { correct: 0, total: 0 };
    const latest = new Map();
    for (const entry of subjectData.history) {
      latest.set(entry.questionId, entry.correct);
    }
    let correct = 0;
    for (const c of latest.values()) if (c) correct += 1;
    return { correct, total: latest.size };
  };

  const recordFlashcard = useCallback((cardId, sm2Result) => {
    setProgress(prev => {
      const updated = { ...prev };
      if (!updated.flashcards) updated.flashcards = {};
      updated.flashcards[cardId] = { ...sm2Result, lastSeen: new Date().toISOString() };
      save(updated);
      return updated;
    });
  }, []);

  const recordCaseComplete = useCallback((caseId, score) => {
    setProgress(prev => {
      const updated = { ...prev };
      if (!updated.cases) updated.cases = {};
      updated.cases[caseId] = { score, date: new Date().toISOString() };
      save(updated);
      return updated;
    });
  }, []);

  const getSubjectStats = useCallback((subject) => {
    const { correct, total } = computeStats(progress.quiz?.[subject]);
    if (total === 0) return null;
    return { correct, total, pct: Math.round((correct / total) * 100) };
  }, [progress]);

  const getAllStats = useCallback(() => {
    const quiz = progress.quiz || {};
    return Object.entries(quiz).map(([subject, data]) => {
      const { correct, total } = computeStats(data);
      return {
        subject,
        correct,
        total,
        pct: total > 0 ? Math.round((correct / total) * 100) : 0,
      };
    }).filter(s => s.total > 0).sort((a, b) => a.pct - b.pct);
  }, [progress]);

  return { progress, recordQuizAnswer, recordFlashcard, recordCaseComplete, getSubjectStats, getAllStats };
}
