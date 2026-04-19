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
      if (!updated.quiz[subject]) updated.quiz[subject] = { correct: 0, total: 0, history: [] };
      updated.quiz[subject].total += 1;
      if (correct) updated.quiz[subject].correct += 1;
      updated.quiz[subject].history.push({ questionId, correct, date: new Date().toISOString() });
      save(updated);
      return updated;
    });
  }, []);

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
    const q = progress.quiz?.[subject];
    if (!q || q.total === 0) return null;
    return {
      correct: q.correct,
      total: q.total,
      pct: Math.round((q.correct / q.total) * 100),
    };
  }, [progress]);

  const getAllStats = useCallback(() => {
    const quiz = progress.quiz || {};
    return Object.entries(quiz).map(([subject, data]) => ({
      subject,
      correct: data.correct,
      total: data.total,
      pct: data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0,
    })).sort((a, b) => a.pct - b.pct);
  }, [progress]);

  return { progress, recordQuizAnswer, recordFlashcard, recordCaseComplete, getSubjectStats, getAllStats };
}
