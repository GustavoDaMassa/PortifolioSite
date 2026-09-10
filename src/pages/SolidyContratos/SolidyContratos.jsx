import { useTranslation } from 'react-i18next';
import { ProjectShowcase } from '../../components/ProjectShowcase/ProjectShowcase';

export const SolidyContratos = () => {
  const { t } = useTranslation();

  return (
    <ProjectShowcase
      title={t('projects.solidycontratos.title')}
      description={t('projects.solidycontratos.description')}
      tags={['Node.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'React', 'Zustand', 'React Query']}
      appUrl="https://github.com/GustavoDaMassa/SolidyContratos"
      githubUrl="https://github.com/GustavoDaMassa/SolidyContratos"
    />
  );
};
