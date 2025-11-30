import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Layout } from '../../components/Layout/Layout';
import { NavArrows } from '../../components/Navigation/NavArrows';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import { useSwipe } from '../../hooks/useSwipe';
import styles from './AllProjects.module.css';

export const AllProjects = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useSwipe(
    null, // Sem próxima página
    () => navigate('/finance') // Swipe right -> anterior
  );

  return (
    <Layout showTopNav={false}>
      <NavArrows leftPath="/finance" />
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
