import { useTranslation } from 'react-i18next';
import { Layout } from '../../components/Layout/Layout';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import styles from './AllProjects.module.css';

export const AllProjects = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className={styles.header}>
        <span>{t('allProjects.title')}</span>
      </div>
      <main className={styles.cards}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </main>
    </Layout>
  );
};
