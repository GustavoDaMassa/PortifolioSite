import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { MediasAPI } from './pages/MediasAPI/MediasAPI';
import { FinanceAPI } from './pages/FinanceAPI/FinanceAPI';
import { AllProjects } from './pages/AllProjects/AllProjects';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medias" element={<MediasAPI />} />
        <Route path="/finance" element={<FinanceAPI />} />
        <Route path="/projetos" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
