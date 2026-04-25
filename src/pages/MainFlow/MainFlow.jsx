import { useEffect, useEffectEvent, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import { HomeContent } from '../Home/Home';
import { AllProjectsContent } from '../AllProjects/AllProjects';
import { TrajetoriaContent } from '../Trajetoria/Trajetoria';
import { BlogContent } from '../Blog/Blog';
import styles from './MainFlow.module.css';

const FLOW_SECTIONS = [
  { path: '/', id: 'home', component: <HomeContent showNavArrows={false} /> },
  { path: '/projetos', id: 'projects', component: <AllProjectsContent /> },
  { path: '/trajetoria', id: 'trajetoria', component: <TrajetoriaContent /> },
  { path: '/blog', id: 'blog', component: <BlogContent /> },
];

export const MainFlow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const sectionRefs = useRef(new Map());
  const syncingRef = useRef(false);
  const pathnameRef = useRef(location.pathname);
  const scrollNavRef = useRef(false);

  pathnameRef.current = location.pathname;

  const setSectionRef = useEffectEvent((path, node) => {
    if (node) {
      sectionRefs.current.set(path, node);
    } else {
      sectionRefs.current.delete(path);
    }
  });

  useEffect(() => {
    if (scrollNavRef.current) {
      scrollNavRef.current = false;
      return;
    }

    const currentSection = sectionRefs.current.get(location.pathname);
    if (!currentSection) {
      return;
    }

    const targetTop = currentSection.getBoundingClientRect().top + window.scrollY - 56;
    if (Math.abs(window.scrollY - targetTop) < 24) {
      return;
    }

    syncingRef.current = true;
    window.scrollTo({ top: targetTop, behavior: 'smooth' });

    const timeoutId = window.setTimeout(() => {
      syncingRef.current = false;
    }, 500);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [location.pathname]);

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (syncingRef.current) return;

        let activeSection = null;
        const mid = window.innerHeight / 2;

        sectionRefs.current.forEach((section, path) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= mid) {
            activeSection = path;
          }
        });

        if (activeSection && activeSection !== pathnameRef.current) {
          scrollNavRef.current = true;
          navigate(activeSection, { replace: true });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className={styles.page}>
        {FLOW_SECTIONS.map((section) => (
          <section
            key={section.path}
            ref={(node) => setSectionRef(section.path, node)}
            data-path={section.path}
            className={styles.section}
          >
            {section.component}
          </section>
        ))}
      </div>
    </Layout>
  );
};
