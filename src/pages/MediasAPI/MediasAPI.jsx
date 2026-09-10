import { useTranslation } from 'react-i18next';
import { ProjectShowcase } from '../../components/ProjectShowcase/ProjectShowcase';
import { getAssetPath } from '../../utils/paths';

export const MediasAPI = () => {
  const { t } = useTranslation();

  return (
    <ProjectShowcase
      title="MediasAPI"
      longTitle={t('mediasAPI.title')}
      description={t('mediasAPI.heroDescription')}
      tags={['Spring Boot', 'JWT', 'OpenAPI 3', 'Docker', 'MySQL', 'JUnit']}
      videoSrc="https://youtu.be/kTjKfrstqTE?si=Dy6AfaIWbH2jFyVE"
      posterSrc={getAssetPath('assets/images/capamedias.png')}
      appUrl="https://MediasAPI.GustavoHDev.com.br"
      docsRoute="/medias/documentacao"
      githubUrl="https://github.com/GustavoDaMassa/MediasAPI"
    />
  );
};
