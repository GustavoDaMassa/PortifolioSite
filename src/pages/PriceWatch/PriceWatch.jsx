import { useTranslation } from 'react-i18next';
import { Layout } from '../../components/Layout/Layout';
import { NavArrows } from '../../components/Navigation/NavArrows';
import { SideMenu } from '../../components/SideMenu/SideMenu';
import { VideoPlayer } from '../../components/VideoPlayer/VideoPlayer';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { FeatureCard } from '../../components/FeatureCard/FeatureCard';
import { ApiEndpoint } from '../../components/ApiEndpoint/ApiEndpoint';
import styles from './PriceWatch.module.css';

export const PriceWatch = () => {
  const { t } = useTranslation();

  const menuItems = [
    { label: t('priceWatch.menu.apresentacao'), href: '#apresentacao' },
    { label: t('priceWatch.menu.arquitetura'), href: '#arquitetura' },
    { label: t('priceWatch.menu.funcionalidades'), href: '#funcionalidades' },
    { label: t('priceWatch.menu.endpoints'), href: '#endpoints' },
    { label: t('priceWatch.menu.praticas'), href: '#praticas' },
  ];

  const features = t('priceWatch.features', { returnObjects: true });
  const endpoints = t('priceWatch.endpoints', { returnObjects: true });

  const heroLinks = [
    { label: 'GitHub', href: 'https://github.com/GustavoDaMassa/PriceWatch', primary: false },
    { label: 'Demo', href: 'https://pricewatch.gustavohdev.com.br', primary: false },
  ];

  const heroTags = ['.NET 8', 'Clean Architecture', 'MongoDB', 'Redis Streams', 'Angular 20', 'Chrome Extension', 'Docker'];

  return (
    <Layout>
      <NavArrows rightPath="/projetos" />
      <main className={styles.content}>
        <div className={styles.contentHeader}>
          <span className={styles.projectTitle}>PriceWatch</span>
          <SideMenu items={menuItems} />
        </div>

        <VideoPlayer
          videoSrc="https://www.youtube.com/watch?v=y6aXDqaX6HM"
          posterSrc="https://raw.githubusercontent.com/GustavoDaMassa/PriceWatchExtension/main/icons/128.png"
        />

        <HeroSection
          title={t('priceWatch.title')}
          description={t('priceWatch.heroDescription')}
          tags={heroTags}
          links={heroLinks}
        />

        <div id="apresentacao">
          <h2>{t('priceWatch.apresentacao.title')}</h2>
          <p>{t('priceWatch.apresentacao.p1')}</p>
          <p>{t('priceWatch.apresentacao.p2')}</p>
          <p>{t('priceWatch.apresentacao.p3')}</p>
        </div>

        <div id="arquitetura">
          <h2>{t('priceWatch.arquitetura.title')}</h2>
          <p>{t('priceWatch.arquitetura.p1')}</p>

          <h3>{t('priceWatch.arquitetura.backend.title')}</h3>
          <p>{t('priceWatch.arquitetura.backend.p1')}</p>
          <p>{t('priceWatch.arquitetura.backend.p2')}</p>

          <h3>{t('priceWatch.arquitetura.frontend.title')}</h3>
          <p>{t('priceWatch.arquitetura.frontend.p1')}</p>

          <h3>{t('priceWatch.arquitetura.extensao.title')}</h3>
          <p>{t('priceWatch.arquitetura.extensao.p1')}</p>
        </div>

        <div id="funcionalidades">
          <h2>{t('priceWatch.funcionalidades.title')}</h2>
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

        <div id="endpoints">
          <h2>{t('priceWatch.endpoints.title')}</h2>
          <div className={styles.endpointsContainer}>
            {endpoints.items.map((endpoint, index) => (
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
          <h2>{t('priceWatch.praticas.title')}</h2>

          <h3>{t('priceWatch.praticas.arquitetura.title')}</h3>
          <ul>
            {t('priceWatch.praticas.arquitetura.items', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>{t('priceWatch.praticas.mensageria.title')}</h3>
          <ul>
            {t('priceWatch.praticas.mensageria.items', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>{t('priceWatch.praticas.seguranca.title')}</h3>
          <ul>
            {t('priceWatch.praticas.seguranca.items', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>{t('priceWatch.praticas.deploy.title')}</h3>
          <ul>
            {t('priceWatch.praticas.deploy.items', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
};
