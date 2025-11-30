import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Layout } from '../../components/Layout/Layout';
import { NavArrows } from '../../components/Navigation/NavArrows';
import { SideMenu } from '../../components/SideMenu/SideMenu';
import { VideoPlayer } from '../../components/VideoPlayer/VideoPlayer';
import { useSwipe } from '../../hooks/useSwipe';
import styles from './FinanceAPI.module.css';

export const FinanceAPI = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const menuItems = [
    { label: t('financeAPI.menu.apresentacao'), href: '#apresentacao' },
    { label: t('financeAPI.menu.motivacao'), href: '#motivacao' },
    { label: t('financeAPI.menu.funcionalidades'), href: '#funcionalidades' },
    { label: t('financeAPI.menu.utilizandoApi'), href: '#utilizando-api' },
    { label: t('financeAPI.menu.praticas'), href: '#praticas' }
  ];

  useSwipe(
    () => navigate('/projetos'), // Swipe left -> próxima
    () => navigate('/medias') // Swipe right -> anterior
  );

  return (
    <Layout>
      <NavArrows leftPath="/medias" rightPath="/projetos" />
      <main className={styles.content}>
        <div className={styles.contentHeader}>
          <span className={styles.projectTitle}>FinanceAPI</span>
          <SideMenu items={menuItems} />
        </div>

        <VideoPlayer
          videoSrc="/assets/images/financeVideo.mp4"
          posterSrc="/assets/images/capafinance.png"
        />

        <h1>{t('financeAPI.title')}</h1>

        <div id="apresentacao">
          <h2>{t('financeAPI.apresentacao.title')}</h2>
          <p>
            <a href="https://github.com/GustavoDaMassa/FinanceAPI" target="_blank" rel="noopener noreferrer">
              {t('financeAPI.apresentacao.docLink')}
            </a>
          </p>
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
          <ul>
            {t('financeAPI.funcionalidades.items', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div id="utilizando-api">
          <h2>{t('financeAPI.utilizandoApi.title')}</h2>

          <h4>{t('financeAPI.utilizandoApi.users.title')}</h4>
          <ul>
            <li>{t('financeAPI.utilizandoApi.users.item')}</li>
          </ul>

          <h4>{t('financeAPI.utilizandoApi.accounts.title')}</h4>
          <ul>
            <li>{t('financeAPI.utilizandoApi.accounts.item')}</li>
          </ul>

          <h4>{t('financeAPI.utilizandoApi.integration.title')}</h4>
          <ul>
            <li>{t('financeAPI.utilizandoApi.integration.item')}</li>
          </ul>

          <h4>{t('financeAPI.utilizandoApi.category.title')}</h4>
          <ul>
            <li>{t('financeAPI.utilizandoApi.category.item')}</li>
          </ul>

          <h4>{t('financeAPI.utilizandoApi.transactions.title')}</h4>
          <ul>
            <li>{t('financeAPI.utilizandoApi.transactions.item')}</li>
          </ul>
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
