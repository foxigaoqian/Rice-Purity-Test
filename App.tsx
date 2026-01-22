import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ScoreMeaning from './pages/ScoreMeaning';
import AverageScore from './pages/AverageScore';
import QuestionsList from './pages/QuestionsList';
import History from './pages/History';
import SafeVersion from './pages/SafeVersion';
import Compare from './pages/Compare';
import ShareScore from './pages/ShareScore';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/score-meaning" element={<ScoreMeaning />} />
          <Route path="/average-score" element={<AverageScore />} />
          <Route path="/questions-list" element={<QuestionsList />} />
          <Route path="/history" element={<History />} />
          <Route path="/safe-version" element={<SafeVersion />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/share-score" element={<ShareScore />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;