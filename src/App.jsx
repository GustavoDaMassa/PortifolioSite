import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { NavigationContext } from './context/NavigationContext';
import { Home } from './pages/Home/Home';
import { MediasAPI } from './pages/MediasAPI/MediasAPI';
import { FinanceAPI } from './pages/FinanceAPI/FinanceAPI';
import { AllProjects } from './pages/AllProjects/AllProjects';
import './i18n/config';
import './styles/global.css';

const PAGE_ORDER = { '/': 0, '/medias': 1, '/finance': 2, '/projetos': 3 };

function AnimatedRoutes() {
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  const direction = useRef(1);
  const isFirstLoad = useRef(true);

  if (prevPath.current !== location.pathname) {
    const prev = PAGE_ORDER[prevPath.current] ?? 0;
    const curr = PAGE_ORDER[location.pathname] ?? 0;
    direction.current = curr >= prev ? 1 : -1;
    prevPath.current = location.pathname;
    isFirstLoad.current = false;
  }

  return (
    <NavigationContext.Provider value={{ direction: direction.current, isFirstLoad: isFirstLoad.current }}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/medias" element={<MediasAPI />} />
          <Route path="/finance" element={<FinanceAPI />} />
          <Route path="/projetos" element={<AllProjects />} />
        </Routes>
      </AnimatePresence>
    </NavigationContext.Provider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router basename="/PortifolioSite">
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
