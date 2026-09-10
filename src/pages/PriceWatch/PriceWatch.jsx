import { useTranslation } from 'react-i18next';
import { ProjectShowcase } from '../../components/ProjectShowcase/ProjectShowcase';

export const PriceWatch = () => {
  const { t } = useTranslation();

  return (
    <ProjectShowcase
      title="PriceWatch"
      longTitle={t('priceWatch.title')}
      description={t('priceWatch.heroDescription')}
      tags={['.NET 8', 'Clean Architecture', 'MongoDB', 'Redis Streams', 'Angular 20', 'Chrome Extension', 'Docker']}
      videoSrc="https://www.youtube.com/watch?v=y6aXDqaX6HM"
      posterSrc="https://raw.githubusercontent.com/GustavoDaMassa/PriceWatchExtension/main/icons/128.png"
      appUrl="https://pricewatch.gustavohdev.com.br"
      docsRoute="/pricewatch/documentacao"
      githubUrl="https://github.com/GustavoDaMassa/PriceWatch"
    />
  );
};
