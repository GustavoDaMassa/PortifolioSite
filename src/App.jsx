import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from './context/ThemeContext';
import { NavigationContext } from './context/NavigationContext';
import { Home } from './pages/Home/Home';
import { Curriculo } from './pages/Curriculo/Curriculo';
import { MediasAPI } from './pages/MediasAPI/MediasAPI';
import { FinanceAPI } from './pages/FinanceAPI/FinanceAPI';
import { AllProjects } from './pages/AllProjects/AllProjects';
import { Trajetoria } from './pages/Trajetoria/Trajetoria';
import { Blog } from './pages/Blog/Blog';
import { BlogPost } from './pages/Blog/BlogPost';
import './i18n/config';
import './styles/global.css';

const PAGE_ORDER = { '/curriculo': -1, '/': 0, '/medias': 1, '/finance': 2, '/projetos': 3, '/trajetoria': 4, '/blog': 5 };
const TITLE_KEY_BY_PATH = {
  '/': 'meta.pageTitle.home',
  '/curriculo': 'meta.pageTitle.curriculo',
  '/medias': 'meta.pageTitle.medias',
  '/finance': 'meta.pageTitle.finance',
  '/projetos': 'meta.pageTitle.projects',
  '/trajetoria': 'meta.pageTitle.trajetoria',
  '/blog': 'meta.pageTitle.blog',
};

function DocumentI18nSync() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language.startsWith('en') ? 'en' : 'pt-BR';

    const titleKey = location.pathname.startsWith('/blog/')
      ? 'meta.pageTitle.blogPost'
      : (TITLE_KEY_BY_PATH[location.pathname] || 'meta.pageTitle.default');

    document.title = t(titleKey);
  }, [i18n.language, location.pathname, t]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  const direction = useRef(1);
  const isFirstLoad = useRef(true);

  /* eslint-disable react-hooks/refs */
  if (prevPath.current !== location.pathname) {
    const prev = PAGE_ORDER[prevPath.current] ?? 0;
    const curr = PAGE_ORDER[location.pathname] ?? 0;
    direction.current = curr >= prev ? 1 : -1;
    prevPath.current = location.pathname;
    isFirstLoad.current = false;
  }
  /* eslint-enable react-hooks/refs */

  return (
    // eslint-disable-next-line react-hooks/refs
    <NavigationContext.Provider value={{ direction: direction.current, isFirstLoad: isFirstLoad.current }}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/curriculo" element={<Curriculo />} />
          <Route path="/" element={<Home />} />
          <Route path="/medias" element={<MediasAPI />} />
          <Route path="/finance" element={<FinanceAPI />} />
          <Route path="/projetos" element={<AllProjects />} />
          <Route path="/trajetoria" element={<Trajetoria />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </AnimatePresence>
    </NavigationContext.Provider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <DocumentI18nSync />
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
