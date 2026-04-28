import { useTranslation } from 'react-i18next';
import { Layout } from '../../components/Layout/Layout';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { featuredProjects, projects } from '../../data/projects';
import styles from './AllProjects.module.css';

export const AllProjectsContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.hero}>
        <h1 className={styles.title}>{t('allProjects.title')}</h1>
      </div>
      <div className={styles.sectionHeader}>
        <span>{t('allProjects.featured')}</span>
      </div>
      <main className={styles.featuredCards}>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </main>
      <div className={styles.sectionHeader}>
        <span>{t('allProjects.all')}</span>
      </div>
      <main className={styles.cards}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </main>
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
