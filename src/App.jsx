import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Home } from './pages/Home/Home';
import { MediasAPI } from './pages/MediasAPI/MediasAPI';
import { FinanceAPI } from './pages/FinanceAPI/FinanceAPI';
import { AllProjects } from './pages/AllProjects/AllProjects';
import './i18n/config';
import './styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <Router basename="/PortifolioSite">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medias" element={<MediasAPI />} />
          <Route path="/finance" element={<FinanceAPI />} />
          <Route path="/projetos" element={<AllProjects />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
