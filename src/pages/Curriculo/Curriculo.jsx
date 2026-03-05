import { useTranslation } from 'react-i18next';
import { Layout } from '../../components/Layout/Layout';
import { NavArrows } from '../../components/Navigation/NavArrows';
import { getAssetPath } from '../../utils/paths';
import styles from './Curriculo.module.css';

export const Curriculo = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <NavArrows rightPath="/" />
      <div className={styles.container}>

        <div className={styles.topBar}>
          <h2 className={styles.pageTitle}>{t('curriculo.pageTitle')}</h2>
          <a
            href={getAssetPath('assets/images/GustavoHDev.pdf')}
            download="GustavoHDev.pdf"
            className={styles.downloadBtn}
          >
            {t('curriculo.download')}
          </a>
        </div>

        <div className={styles.resumeCard}>

          <div className={styles.resumeHeader}>
            <h1>Gustavo Henrique Pereira da Silva</h1>
            <p className={styles.resumeTitle}>Desenvolvedor Fullstack | Java · Spring Boot · Angular</p>
            <p className={styles.resumeContact}>
              (62) 99128-1661 &nbsp;·&nbsp; gustavohenrique3gb@gmail.com &nbsp;·&nbsp;
              <a href="https://linkedin.com/in/gustavohpereiradev" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/gustavohpereiradev
              </a>
              &nbsp;·&nbsp;
              <a href="https://github.com/GustavoDaMassa" target="_blank" rel="noopener noreferrer">
                github.com/GustavoDaMassa
              </a>
              &nbsp;·&nbsp;
              <a href="https://GustavoHDev.com.br" target="_blank" rel="noopener noreferrer">
                GustavoHDev.com.br
              </a>
            </p>
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('curriculo.sobre.title')}</h2>
            <p className={styles.sectionText}>
              {t('curriculo.sobre.text')}
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('curriculo.habilidades.title')}</h2>
            <div className={styles.skillsGrid}>
              <div className={styles.skillRow}>
                <span className={styles.skillLabel}>Back-end</span>
                <span className={styles.skillValue}>Java, Spring Boot (Data JPA, Security), C#/ASP.NET Core, TypeScript/NestJS, REST APIs, GraphQL, Apache Kafka</span>
              </div>
              <div className={styles.skillRow}>
                <span className={styles.skillLabel}>Front-end</span>
                <span className={styles.skillValue}>Angular, React</span>
              </div>
              <div className={styles.skillRow}>
                <span className={styles.skillLabel}>{t('curriculo.habilidades.databases')}</span>
                <span className={styles.skillValue}>PostgreSQL, MySQL</span>
              </div>
              <div className={styles.skillRow}>
                <span className={styles.skillLabel}>{t('curriculo.habilidades.infra')}</span>
                <span className={styles.skillValue}>Docker, CI/CD (GitHub Actions), Terraform, AWS</span>
              </div>
              <div className={styles.skillRow}>
                <span className={styles.skillLabel}>{t('curriculo.habilidades.tools')}</span>
                <span className={styles.skillValue}>Git, Swagger/OpenAPI, Flyway, JUnit</span>
              </div>
              <div className={styles.skillRow}>
                <span className={styles.skillLabel}>{t('curriculo.habilidades.practices')}</span>
                <span className={styles.skillValue}>Clean Architecture, SOLID, Design Patterns, {t('curriculo.habilidades.tests')}, ORM, Migrations</span>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('curriculo.experiencia.title')}</h2>

            <div className={styles.jobBlock}>
              <div className={styles.jobHeader}>
                <span className={styles.jobTitle}>Desenvolvedor Fullstack Independente — FinanceAPI</span>
                <span className={styles.jobDate}>2024 – {t('curriculo.present')}</span>
              </div>
              <p className={styles.jobStack}>Java · Spring Boot · GraphQL · Apache Kafka · PostgreSQL · Docker · Angular</p>
              <p className={styles.jobLinks}>
                <a href="https://github.com/GustavoDaMassa/FinanceAPI" target="_blank" rel="noopener noreferrer">
                  github.com/GustavoDaMassa/FinanceAPI
                </a>
                <span className={styles.linkSep}>&nbsp;·&nbsp;</span>
                <a href="https://financeapi.com.br" target="_blank" rel="noopener noreferrer">
                  FinanceAPI.com.br
                </a>
              </p>
              <ul className={styles.jobList}>
                <li>{t('curriculo.experiencia.finance.item1')}</li>
                <li>{t('curriculo.experiencia.finance.item2')}</li>
                <li>{t('curriculo.experiencia.finance.item3')}</li>
                <li>{t('curriculo.experiencia.finance.item4')}</li>
                <li>{t('curriculo.experiencia.finance.item5')}</li>
                <li>{t('curriculo.experiencia.finance.item6')}</li>
              </ul>
            </div>

            <div className={styles.jobBlock}>
              <div className={styles.jobHeader}>
                <span className={styles.jobTitle}>Desenvolvedor Fullstack Independente — MédiasAPI</span>
                <span className={styles.jobDate}>2023 – {t('curriculo.present')}</span>
              </div>
              <p className={styles.jobStack}>Java · Spring Boot · JWT · MySQL · Docker · Swagger · Angular · Terraform</p>
              <p className={styles.jobLinks}>
                <a href="https://github.com/GustavoDaMassa/MediasAPI" target="_blank" rel="noopener noreferrer">
                  github.com/GustavoDaMassa/MediasAPI
                </a>
                <span className={styles.linkSep}>&nbsp;·&nbsp;</span>
                <a href="https://mediasapi.gustavohdev.com.br" target="_blank" rel="noopener noreferrer">
                  MediasAPI.GustavoHDev.com.br
                </a>
              </p>
              <ul className={styles.jobList}>
                <li>{t('curriculo.experiencia.medias.item1')}</li>
                <li>{t('curriculo.experiencia.medias.item2')}</li>
                <li>{t('curriculo.experiencia.medias.item3')}</li>
                <li>{t('curriculo.experiencia.medias.item4')}</li>
                <li>{t('curriculo.experiencia.medias.item5')}</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('curriculo.formacao.title')}</h2>
            <div className={styles.eduBlock}>
              <div className={styles.jobHeader}>
                <span className={styles.jobTitle}>{t('curriculo.formacao.degree')}</span>
                <span className={styles.jobDate}>2022 – 2026</span>
              </div>
              <p className={styles.jobStack}>Universidade Federal de Goiás (UFG)</p>
              <ul className={styles.jobList}>
                <li>{t('curriculo.formacao.item1')}</li>
                <li>{t('curriculo.formacao.item2')}</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('curriculo.outros.title')}</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>{t('curriculo.outros.col.project')}</th>
                  <th>{t('curriculo.outros.col.tech')}</th>
                  <th>{t('curriculo.outros.col.desc')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>GoianinhaCompiler</td>
                  <td>C</td>
                  <td>{t('curriculo.outros.goianinha')}</td>
                </tr>
                <tr>
                  <td>SimplifiedWallet</td>
                  <td>Java, Spring Boot</td>
                  <td>{t('curriculo.outros.wallet')}</td>
                </tr>
                <tr>
                  <td>AgendaToDo</td>
                  <td>Java, Spring Boot</td>
                  <td>{t('curriculo.outros.agenda')}</td>
                </tr>
                <tr>
                  <td>CodinomeUol</td>
                  <td>Java</td>
                  <td>{t('curriculo.outros.codinome')}</td>
                </tr>
              </tbody>
            </table>
          </section>

        </div>
      </div>
    </Layout>
  );
};
