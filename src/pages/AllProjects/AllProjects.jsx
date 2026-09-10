import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Layout } from '../../components/Layout/Layout';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { FeaturedCarousel } from '../../components/FeaturedCarousel/FeaturedCarousel';
import { featuredProjects, projects } from '../../data/projects';
import styles from './AllProjects.module.css';

export const AllProjectsContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.sectionHeader}>
        <span>{t('allProjects.featured')}</span>
      </div>
      <main className={styles.featuredCarousel}>
        <FeaturedCarousel projects={featuredProjects} />
      </main>
      <div className={styles.sectionHeader}>
        <span>{t('allProjects.all')}</span>
      </div>
      <main className={styles.cards}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </main>

      <div className={styles.cta}>
        <p className={styles.ctaText}>{t('allProjects.ctaText')}</p>
        <div className={styles.ctaButtons}>
          <Link to="/blog" className={styles.ctaButton}>
            {t('home.blogHint')}
          </Link>
          <Link to="/trajetoria" className={styles.ctaButton}>
            {t('allProjects.trajetoriaHint')}
          </Link>
        </div>
      </div>
    </>
  );
};

export const AllProjects = () => {
  return (
    <Layout>
      <AllProjectsContent />
    </Layout>
  );
};
