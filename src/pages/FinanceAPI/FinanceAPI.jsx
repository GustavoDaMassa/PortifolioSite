import { useTranslation } from 'react-i18next';
import { ProjectShowcase } from '../../components/ProjectShowcase/ProjectShowcase';
import { getAssetPath } from '../../utils/paths';

export const FinanceAPI = () => {
  const { t } = useTranslation();

  return (
    <ProjectShowcase
      title="FinanceMY"
      longTitle={t('financeAPI.title')}
      description={t('financeAPI.heroDescription')}
      tags={['GraphQL', 'Kafka', 'PostgreSQL', 'Spring Security', 'Pluggy', 'Docker']}
      videoSrc="https://youtu.be/F6fvKmKf_W0?si=Z731Ws7CXn4LJ1PX"
      posterSrc={getAssetPath('assets/images/capafinance.png')}
      appUrl="https://FinanceAPI.com.br"
      docsRoute="/finance/documentacao"
      githubUrl="https://github.com/GustavoDaMassa/FinanceAPI"
    />
  );
};
