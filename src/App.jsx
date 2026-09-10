import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from './context/ThemeContext';
import { NavigationContext } from './context/NavigationContext';
import { LanguageGateContext } from './context/LanguageGateContext';
import { TopNav } from './components/Navigation/TopNav';
import { LanguageGate } from './components/LanguageGate/LanguageGate';
import { Home } from './pages/Home/Home';
import { Curriculo } from './pages/Curriculo/Curriculo';
import { MediasAPI } from './pages/MediasAPI/MediasAPI';
import { MediasDocs } from './pages/MediasAPI/MediasDocs';
import { FinanceAPI } from './pages/FinanceAPI/FinanceAPI';
import { FinanceDocs } from './pages/FinanceAPI/FinanceDocs';
import { PriceWatch } from './pages/PriceWatch/PriceWatch';
import { PriceWatchDocs } from './pages/PriceWatch/PriceWatchDocs';
import { CaixaFlow } from './pages/CaixaFlow/CaixaFlow';
import { ZapAgenda } from './pages/ZapAgenda/ZapAgenda';
import { DevDraw } from './pages/DevDraw/DevDraw';
import { SolidyContratos } from './pages/SolidyContratos/SolidyContratos';
import { AllProjects } from './pages/AllProjects/AllProjects';
import { Trajetoria } from './pages/Trajetoria/Trajetoria';
import { Blog } from './pages/Blog/Blog';
import { BlogPost } from './pages/Blog/BlogPost';
import './i18n/config';
import './styles/global.css';

const PAGE_ORDER = {
  '/curriculo': -1,
  '/': 0,
  '/medias': 1,
  '/medias/documentacao': 1.1,
  '/finance': 2,
  '/finance/documentacao': 2.1,
  '/pricewatch': 2.5,
  '/pricewatch/documentacao': 2.6,
  '/caixaflow': 2.7,
  '/zapagenda': 2.75,
  '/devdraw': 2.8,
  '/solidycontratos': 2.85,
  '/projetos': 3,
  '/trajetoria': 4,
  '/blog': 5,
};
const TITLE_KEY_BY_PATH = {
  '/': 'meta.pageTitle.home',
  '/curriculo': 'meta.pageTitle.curriculo',
  '/medias': 'meta.pageTitle.medias',
  '/medias/documentacao': 'meta.pageTitle.medias',
  '/finance': 'meta.pageTitle.finance',
  '/finance/documentacao': 'meta.pageTitle.finance',
  '/pricewatch': 'meta.pageTitle.pricewatch',
  '/pricewatch/documentacao': 'meta.pageTitle.pricewatch',
  '/caixaflow': 'meta.pageTitle.caixaflow',
  '/zapagenda': 'meta.pageTitle.zapagenda',
  '/devdraw': 'meta.pageTitle.devdraw',
  '/solidycontratos': 'meta.pageTitle.solidycontratos',
  '/projetos': 'meta.pageTitle.projects',
  '/trajetoria': 'meta.pageTitle.trajetoria',
  '/blog': 'meta.pageTitle.blog',
};

function DocumentI18nSync() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const langTag = i18n.language.startsWith('en')
      ? 'en'
      : i18n.language.startsWith('it')
        ? 'it'
        : 'pt-BR';
    document.documentElement.lang = langTag;

    const titleKey = location.pathname.startsWith('/blog/')
      ? 'meta.pageTitle.blogPost'
      : (TITLE_KEY_BY_PATH[location.pathname] || 'meta.pageTitle.default');

    document.title = t(titleKey);
  }, [i18n.language, location.pathname, t]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  const backgroundLocation = location.state?.backgroundLocation;
  const baseLocation = backgroundLocation || location;
  const prevPath = useRef(baseLocation.pathname);
  const direction = useRef(1);
  const isFirstLoad = useRef(true);

  /* eslint-disable react-hooks/refs */
  if (prevPath.current !== baseLocation.pathname) {
    const prev = PAGE_ORDER[prevPath.current] ?? 0;
    const curr = PAGE_ORDER[baseLocation.pathname] ?? 0;
    direction.current = curr >= prev ? 1 : -1;
    prevPath.current = baseLocation.pathname;
    isFirstLoad.current = false;
  }
  /* eslint-enable react-hooks/refs */

  return (
    // eslint-disable-next-line react-hooks/refs
    <NavigationContext.Provider value={{ direction: direction.current, isFirstLoad: isFirstLoad.current }}>
      <AnimatePresence mode="wait">
        <Routes location={baseLocation} key={baseLocation.pathname}>
          <Route path="/curriculo" element={<Curriculo />} />
          <Route path="/" element={<Home />} />
          <Route path="/medias" element={<MediasAPI />} />
          <Route path="/medias/documentacao" element={<MediasDocs />} />
          <Route path="/finance" element={<FinanceAPI />} />
          <Route path="/finance/documentacao" element={<FinanceDocs />} />
          <Route path="/pricewatch" element={<PriceWatch />} />
          <Route path="/pricewatch/documentacao" element={<PriceWatchDocs />} />
          <Route path="/caixaflow" element={<CaixaFlow />} />
          <Route path="/zapagenda" element={<ZapAgenda />} />
          <Route path="/devdraw" element={<DevDraw />} />
          <Route path="/solidycontratos" element={<SolidyContratos />} />
          <Route path="/projetos" element={<AllProjects />} />
          <Route path="/trajetoria" element={<Trajetoria />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </AnimatePresence>

      {backgroundLocation && (
        <Routes location={location}>
          <Route path="/medias" element={<MediasAPI />} />
          <Route path="/finance" element={<FinanceAPI />} />
          <Route path="/pricewatch" element={<PriceWatch />} />
          <Route path="/caixaflow" element={<CaixaFlow />} />
          <Route path="/zapagenda" element={<ZapAgenda />} />
          <Route path="/devdraw" element={<DevDraw />} />
          <Route path="/solidycontratos" element={<SolidyContratos />} />
        </Routes>
      )}
    </NavigationContext.Provider>
  );
}

function App() {
  const [languageChosen, setLanguageChosen] = useState(false);

  return (
    <ThemeProvider>
      <LanguageGateContext.Provider value={{ openGate: () => setLanguageChosen(false) }}>
        <Router basename={import.meta.env.BASE_URL}>
          <DocumentI18nSync />
          <TopNav />
          <AnimatedRoutes />
          {!languageChosen && <LanguageGate onSelect={() => setLanguageChosen(true)} />}
        </Router>
      </LanguageGateContext.Provider>
    </ThemeProvider>
  );
}

export default App;
