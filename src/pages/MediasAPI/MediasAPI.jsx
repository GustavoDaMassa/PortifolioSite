import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Layout } from '../../components/Layout/Layout';
import { NavArrows } from '../../components/Navigation/NavArrows';
import { SideMenu } from '../../components/SideMenu/SideMenu';
import { VideoPlayer } from '../../components/VideoPlayer/VideoPlayer';
import { useSwipe } from '../../hooks/useSwipe';
import styles from './MediasAPI.module.css';

export const MediasAPI = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const menuItems = [
    { label: t('mediasAPI.menu.apresentacao'), href: '#apresentacao' },
    { label: t('mediasAPI.menu.motivacao'), href: '#motivacao' },
    { label: t('mediasAPI.menu.funcionalidades'), href: '#funcionalidades' },
    { label: t('mediasAPI.menu.utilizandoApi'), href: '#utilizando-api' },
    { label: t('mediasAPI.menu.praticas'), href: '#praticas' }
  ];

  useSwipe(
    () => navigate('/finance'), // Swipe left -> próxima
    () => navigate('/') // Swipe right -> anterior
  );

  return (
    <Layout>
      <NavArrows leftPath="/" rightPath="/finance" />
      <main className={styles.content}>
        <div className={styles.contentHeader}>
          <span className={styles.projectTitle}>MediasAPI</span>
          <SideMenu items={menuItems} />
        </div>

        <VideoPlayer
          videoSrc="/assets/images/mediasVideo.mp4"
          posterSrc="/assets/images/capamedias.png"
        />

        <h1>{t('mediasAPI.title')}</h1>

        <div id="apresentacao">
          <h2>{t('mediasAPI.apresentacao.title')}</h2>
          <p>
            Acesse a{' '}
            <a href="https://github.com/GustavoDaMassa/MediasAPI" target="_blank" rel="noopener noreferrer">
              {t('mediasAPI.apresentacao.docLink')}
            </a>
          </p>
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
          <ul>
            {t('mediasAPI.funcionalidades.items', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div id="utilizando-api">
          <h2>{t('mediasAPI.utilizandoApi.title')}</h2>

          <h4>{t('mediasAPI.utilizandoApi.login.title')}</h4>
          <ul>
            <li>{t('mediasAPI.utilizandoApi.login.item')}</li>
          </ul>

          <h4>{t('mediasAPI.utilizandoApi.autenticacao.title')}</h4>
          <ul>
            <li>{t('mediasAPI.utilizandoApi.autenticacao.item')}</li>
          </ul>

          <h4>{t('mediasAPI.utilizandoApi.disciplinas.title')}</h4>
          <ul>
            <li>{t('mediasAPI.utilizandoApi.disciplinas.item')}</li>
          </ul>

          <h4>{t('mediasAPI.utilizandoApi.projecoes.title')}</h4>
          <ul>
            <li>{t('mediasAPI.utilizandoApi.projecoes.item')}</li>
          </ul>

          <h4>{t('mediasAPI.utilizandoApi.avaliacoes.title')}</h4>
          <ul>
            <li>{t('mediasAPI.utilizandoApi.avaliacoes.item')}</li>
          </ul>
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
