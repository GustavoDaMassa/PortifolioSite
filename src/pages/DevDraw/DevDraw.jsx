import { useTranslation } from 'react-i18next';
import { ProjectShowcase } from '../../components/ProjectShowcase/ProjectShowcase';

export const DevDraw = () => {
  const { t } = useTranslation();

  return (
    <ProjectShowcase
      title={t('projects.devdraw.title')}
      description={t('projects.devdraw.description')}
      tags={['NestJS', 'React', 'Y.js (CRDT)', 'PostgreSQL', 'AES-256-GCM']}
      appUrl="https://github.com/GustavoDaMassa/DevDraw"
      githubUrl="https://github.com/GustavoDaMassa/DevDraw"
    />
  );
};
