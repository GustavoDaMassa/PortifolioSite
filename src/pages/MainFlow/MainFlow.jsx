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

  const setSectionRef = useEffectEvent((path, node) => {
    if (node) {
      sectionRefs.current.set(path, node);
    } else {
      sectionRefs.current.delete(path);
    }
  });

  useEffect(() => {
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
    const observer = new IntersectionObserver(
      (entries) => {
        if (syncingRef.current) {
          return;
        }

        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) {
          return;
        }

        const nextPath = visibleEntry.target.getAttribute('data-path');
        if (nextPath && nextPath !== location.pathname) {
          navigate(nextPath, { replace: true });
        }
      },
      {
        threshold: [0.35, 0.6, 0.85],
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    const sections = [...sectionRefs.current.values()];
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [location.pathname, navigate]);

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
