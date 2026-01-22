import { useTranslation } from 'react-i18next';
import { Layout } from '../../components/Layout/Layout';
import { SideMenu } from '../../components/SideMenu/SideMenu';
import { VideoPlayer } from '../../components/VideoPlayer/VideoPlayer';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { FeatureCard } from '../../components/FeatureCard/FeatureCard';
import { ApiEndpoint } from '../../components/ApiEndpoint/ApiEndpoint';
import { getAssetPath } from '../../utils/paths';
import styles from './MediasAPI.module.css';

export const MediasAPI = () => {
  const { t } = useTranslation();

  const menuItems = [
    { label: t('mediasAPI.menu.apresentacao'), href: '#apresentacao' },
    { label: t('mediasAPI.menu.motivacao'), href: '#motivacao' },
    { label: t('mediasAPI.menu.funcionalidades'), href: '#funcionalidades' },
    { label: t('mediasAPI.menu.utilizandoApi'), href: '#utilizando-api' },
    { label: t('mediasAPI.menu.praticas'), href: '#praticas' }
  ];

  const features = [
    { icon: '📊', title: 'Armazenamento de Notas', description: 'Armazene notas de forma estruturada e eficiente.' },
    { icon: '🧮', title: 'Cálculo Personalizado', description: 'Defina métodos personalizados para cálculo de médias.' },
    { icon: '🎯', title: 'Metas Acadêmicas', description: 'Obtenha automaticamente a pontuação necessária para alcançar suas metas.' },
    { icon: '📈', title: 'Simulações', description: 'Simule diferentes cenários para planejamento estratégico.' },
    { icon: '📚', title: 'Gestão de Disciplinas', description: 'Gerencie disciplinas com flexibilidade total.' }
  ];

  const endpoints = [
    { method: 'POST', route: '/api/auth/register', description: 'Criar perfil cadastrando-se no sistema.' },
    { method: 'POST', route: '/api/auth/login', description: 'Validar credenciais e obter token JWT.' },
    { method: 'GET', route: '/api/disciplinas', description: 'Listar todas as disciplinas do usuário.' },
    { method: 'POST', route: '/api/disciplinas', description: 'Criar disciplina com método de cálculo personalizado.' },
    { method: 'GET', route: '/api/projecoes', description: 'Visualizar projeções e simular cenários.' },
    { method: 'PUT', route: '/api/avaliacoes/{id}', description: 'Lançar e atualizar notas das avaliações.' }
  ];

  const heroLinks = [
    { label: 'GitHub', href: 'https://github.com/GustavoDaMassa/MediasAPI', primary: true }
  ];

  const heroTags = ['Spring Boot', 'JWT', 'OpenAPI 3', 'Docker', 'MySQL', 'JUnit'];

  return (
    <Layout>
      <main className={styles.content}>
        <div className={styles.contentHeader}>
          <span className={styles.projectTitle}>MediasAPI</span>
          <SideMenu items={menuItems} />
        </div>

        <VideoPlayer
          videoSrc="https://youtu.be/dcPSl0qejQk"
          posterSrc={getAssetPath('assets/images/capamedias.png')}
        />

        <HeroSection
          title={t('mediasAPI.title')}
          description="Transforme sua gestão acadêmica com cálculos dinâmicos de médias, projeções inteligentes e simulações estratégicas. Suporte a expressões matemáticas customizáveis com algoritmo Shunting Yard."
          tags={heroTags}
          links={heroLinks}
        />

        <div id="apresentacao">
          <h2>{t('mediasAPI.apresentacao.title')}</h2>
          <p>{t('mediasAPI.apresentacao.p1')}</p>
          <p>{t('mediasAPI.apresentacao.p2')}</p>
          <p>{t('mediasAPI.apresentacao.p3')}</p>
        </div>

        <div id="motivacao">
          <h2>{t('mediasAPI.motivacao.title')}</h2>
          <p>{t('mediasAPI.motivacao.p1')}</p>
          <p>{t('mediasAPI.motivacao.p2')}</p>
          <p>{t('mediasAPI.motivacao.p3')}</p>
        </div>

        <div id="funcionalidades">
          <h2>{t('mediasAPI.funcionalidades.title')}</h2>
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
          <h2>{t('mediasAPI.utilizandoApi.title')}</h2>
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
          <h2>{t('mediasAPI.praticas.title')}</h2>

          <h3>{t('mediasAPI.praticas.arquitetura.title')}</h3>
          <ul>
            {t('mediasAPI.praticas.arquitetura.items', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>{t('mediasAPI.praticas.validacao.title')}</h3>
          <ul>
            {t('mediasAPI.praticas.validacao.items', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>{t('mediasAPI.praticas.erros.title')}</h3>
          <ul>
            {t('mediasAPI.praticas.erros.items', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>{t('mediasAPI.praticas.documentacao.title')}</h3>
          <ul>
            {t('mediasAPI.praticas.documentacao.items', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>{t('mediasAPI.praticas.testes.title')}</h3>
          <ul>
            {t('mediasAPI.praticas.testes.items', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>{t('mediasAPI.praticas.banco.title')}</h3>
          <ul>
            {t('mediasAPI.praticas.banco.items', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>{t('mediasAPI.praticas.ferramentas.title')}</h3>
          <ul>
            {t('mediasAPI.praticas.ferramentas.items', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>{t('mediasAPI.praticas.tecnologias.title')}</h3>
          <ul>
            <li>
              <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer">
                Spring Boot
              </a>
            </li>
            <li>
              <a href="https://springdoc.org/v2/#spring-webflux-support" target="_blank" rel="noopener noreferrer">
                SpringDoc OpenAPI 3
              </a>
            </li>
            <li>
              <a href="https://maven.apache.org/" target="_blank" rel="noopener noreferrer">
                Maven
              </a>
            </li>
            <li>
              <a href="https://www.h2database.com/html/main.html" target="_blank" rel="noopener noreferrer">
                H2 DataBase
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
              <a href="https://dev.mysql.com/downloads/" target="_blank" rel="noopener noreferrer">
                Mysql
              </a>
            </li>
            <li>
              <a href="https://www.mysql.com/products/workbench/" target="_blank" rel="noopener noreferrer">
                Workbench
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
          </ul>
        </div>
      </main>
    </Layout>
  );
};
