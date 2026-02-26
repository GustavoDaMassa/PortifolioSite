import { useTranslation } from 'react-i18next';
import { Layout } from '../../components/Layout/Layout';
import { SideMenu } from '../../components/SideMenu/SideMenu';
import { VideoPlayer } from '../../components/VideoPlayer/VideoPlayer';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { FeatureCard } from '../../components/FeatureCard/FeatureCard';
import { ApiEndpoint } from '../../components/ApiEndpoint/ApiEndpoint';
import { getAssetPath } from '../../utils/paths';
import styles from './FinanceAPI.module.css';

export const FinanceAPI = () => {
  const { t } = useTranslation();

  const menuItems = [
    { label: t('financeAPI.menu.apresentacao'), href: '#apresentacao' },
    { label: t('financeAPI.menu.motivacao'), href: '#motivacao' },
    { label: t('financeAPI.menu.funcionalidades'), href: '#funcionalidades' },
    { label: t('financeAPI.menu.utilizandoApi'), href: '#utilizando-api' },
    { label: t('financeAPI.menu.praticas'), href: '#praticas' }
  ];

  const features = t('financeAPI.features', { returnObjects: true });
  const endpoints = t('financeAPI.endpoints', { returnObjects: true });

  const heroLinks = [
    { label: 'GitHub', href: 'https://github.com/GustavoDaMassa/FinanceAPI', primary: false },
    { label: 'Site Oficial', href: 'https://FinanceAPI.com.br', primary: false }
  ];

  const heroTags = ['GraphQL', 'Kafka', 'PostgreSQL', 'Spring Security', 'Pluggy', 'Docker'];

  return (
    <Layout>
      <main className={styles.content}>
        <div className={styles.contentHeader}>
          <span className={styles.projectTitle}>FinanceAPI</span>
          <SideMenu items={menuItems} />
        </div>

        <VideoPlayer
          videoSrc="https://youtu.be/WVfYWVNJeOM"
          posterSrc={getAssetPath('assets/images/capafinance.png')}
        />

        <HeroSection
          title={t('financeAPI.title')}
          description={t('financeAPI.heroDescription')}
          tags={heroTags}
          links={heroLinks}
        />

        <div id="apresentacao">
          <h2>{t('financeAPI.apresentacao.title')}</h2>
          <p>{t('financeAPI.apresentacao.p1')}</p>
          <p>{t('financeAPI.apresentacao.p2')}</p>
          <p>{t('financeAPI.apresentacao.p3')}</p>
        </div>

        <div id="motivacao">
          <h2>{t('financeAPI.motivacao.title')}</h2>
          <p>{t('financeAPI.motivacao.p1')}</p>
          <p>{t('financeAPI.motivacao.p2')}</p>
          <p>{t('financeAPI.motivacao.p3')}</p>
        </div>

        <div id="funcionalidades">
          <h2>{t('financeAPI.funcionalidades.title')}</h2>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        <div id="utilizando-api">
          <h2>{t('financeAPI.utilizandoApi.title')}</h2>
          <div className={styles.endpointsContainer}>
            {endpoints.map((endpoint, index) => (
              <ApiEndpoint
                key={index}
                method={endpoint.method}
                route={endpoint.route}
                description={endpoint.description}
              />
            ))}
          </div>
        </div>

        <div id="praticas">
          <h2>{t('financeAPI.praticas.title')}</h2>

          <h3>{t('financeAPI.praticas.arquitetura.title')}</h3>
          <ul>
            {t('financeAPI.praticas.arquitetura.items', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>{t('financeAPI.praticas.validacao.title')}</h3>
          <ul>
            {t('financeAPI.praticas.validacao.items', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>{t('financeAPI.praticas.erros.title')}</h3>
          <ul>
            {t('financeAPI.praticas.erros.items', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>{t('financeAPI.praticas.documentacao.title')}</h3>
          <ul>
            {t('financeAPI.praticas.documentacao.items', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>{t('financeAPI.praticas.testes.title')}</h3>
          <ul>
            {t('financeAPI.praticas.testes.items', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>{t('financeAPI.praticas.banco.title')}</h3>
          <ul>
            {t('financeAPI.praticas.banco.items', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>{t('financeAPI.praticas.ferramentas.title')}</h3>
          <ul>
            {t('financeAPI.praticas.ferramentas.items', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
};
