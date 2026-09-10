import { useTranslation } from 'react-i18next';
import { ProjectShowcase } from '../../components/ProjectShowcase/ProjectShowcase';

export const ZapAgenda = () => {
  const { t } = useTranslation();

  return (
    <ProjectShowcase
      title={t('projects.zapagenda.title')}
      description={t('projects.zapagenda.description')}
      tags={['NestJS', 'React', 'RabbitMQ', 'Baileys', 'Gemini API']}
      appUrl="https://github.com/GustavoDaMassa/ZapAgenda"
      githubUrl="https://github.com/GustavoDaMassa/ZapAgenda"
    />
  );
};
