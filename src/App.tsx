// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Editor from './pages/Editor';
import Preview from './pages/Preview';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Editor />} />
        <Route path="/preview/:pageId" element={<Preview />} />
      </Routes>
    </Router>
  );
};

export default App;