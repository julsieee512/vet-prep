import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import StudyNotes from './pages/StudyNotes';
import Quiz from './pages/Quiz';
import Flashcards from './pages/Flashcards';
import ClinicalCases from './pages/ClinicalCases';
import Dictionary from './pages/Dictionary';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/notes" element={<StudyNotes />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/cases" element={<ClinicalCases />} />
          <Route path="/dictionary" element={<Dictionary />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
