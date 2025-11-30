import { Layout } from '../../components/Layout/Layout';
import { NavArrows } from '../../components/Navigation/NavArrows';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import styles from './AllProjects.module.css';

export const AllProjects = () => {
  return (
    <Layout showTopNav={false}>
      <NavArrows leftPath="/finance" />
      <div className={styles.header}>
        <span>Todos os Projetos</span>
      </div>
      <main className={styles.cards}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </main>
    </Layout>
  );
};
