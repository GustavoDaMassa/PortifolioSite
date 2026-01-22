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

  const features = [
    { icon: '🔄', title: 'Webhooks Automáticos', description: 'Receba transações automaticamente via webhook Pluggy.' },
    { icon: '💾', title: 'Persistência Segura', description: 'Persista transações em banco de dados relacional.' },
    { icon: '🏷️', title: 'Categorização Inteligente', description: 'Classifique por categorias personalizadas.' },
    { icon: '📜', title: 'Histórico Completo', description: 'Consulte histórico de transações com filtros avançados.' },
    { icon: '🔍', title: 'Filtros Avançados', description: 'Visualize transações por categoria, período e tipo.' },
    { icon: '💰', title: 'Cálculo de Saldo', description: 'Saldo automático das transações selecionadas.' }
  ];

  const endpoints = [
    { method: 'POST', route: '/graphql - mutation createUser', description: 'Criar perfil cadastrando-se no sistema.' },
    { method: 'POST', route: '/graphql - mutation createAccount', description: 'Criar e editar contas bancárias.' },
    { method: 'POST', route: '/graphql - mutation connectAccount', description: 'Conectar conta com instituição financeira via Pluggy.' },
    { method: 'POST', route: '/graphql - mutation createCategory', description: 'Criar e gerenciar categorias personalizadas.' },
    { method: 'GET', route: '/graphql - query transactions', description: 'Listar transações com filtros e calcular saldo automaticamente.' }
  ];

  const heroLinks = [
    { label: 'GitHub', href: 'https://github.com/GustavoDaMassa/FinanceAPI', primary: true }
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
          description="Conecte-se ao ecossistema Open Finance com integração bancária em tempo real. Capture transações via webhooks, categorize movimentações e analise suas finanças com consultas GraphQL flexíveis."
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

          <h3>{t('financeAPI.praticas.tecnologias.title')}</h3>
          <ul>
            <li>
              <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer">
                Spring Boot
              </a>
            </li>
            <li>
              <a href="https://maven.apache.org/" target="_blank" rel="noopener noreferrer">
                Maven
              </a>
            </li>
            <li>
              <a href="https://beanvalidation.org/" target="_blank" rel="noopener noreferrer">
                Bean Validation
              </a>
            </li>
            <li>
              <a href="https://docs.spring.io/spring-security/reference/index.html" target="_blank" rel="noopener noreferrer">
                Spring Security
              </a>
            </li>
            <li>
              <a href="https://junit.org/junit5/" target="_blank" rel="noopener noreferrer">
                JUnit
              </a>
            </li>
            <li>
              <a href="https://postman.com/" target="_blank" rel="noopener noreferrer">
                Postman
              </a>
            </li>
            <li>
              <a href="https://www.docker.com/products/docker-hub/" target="_blank" rel="noopener noreferrer">
                Docker
              </a>
            </li>
            <li>
              <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                Git
              </a>
            </li>
            <li>
              <a href="https://docs.spring.io/spring-framework/reference/web/webflux-webclient.html" target="_blank" rel="noopener noreferrer">
                Spring WebClient
              </a>
            </li>
            <li>
              <a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">
                Kafka
              </a>
            </li>
            <li>
              <a href="https://graphql.org/" target="_blank" rel="noopener noreferrer">
                GraphQL
              </a>
            </li>
            <li>
              <a href="https://www.pluggy.ai/" target="_blank" rel="noopener noreferrer">
                Pluggy
              </a>
            </li>
            <li>
              <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
                PostgreSQL
              </a>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
};
