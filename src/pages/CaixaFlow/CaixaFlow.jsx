import { useTranslation } from 'react-i18next';
import { ProjectShowcase } from '../../components/ProjectShowcase/ProjectShowcase';

export const CaixaFlow = () => {
  const { t } = useTranslation();

  return (
    <ProjectShowcase
      title={t('projects.caixaflow.title')}
      description={t('projects.caixaflow.description')}
      tags={['Ruby on Rails']}
      appUrl="https://github.com/GustavoDaMassa/MVP-CaixaFlow"
      githubUrl="https://github.com/GustavoDaMassa/MVP-CaixaFlow"
    />
  );
};
