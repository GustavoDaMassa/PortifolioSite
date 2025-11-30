import { socialLinks } from '../../data/socialLinks';
import styles from './ProfileSection.module.css';

export const ProfileSection = () => {
  return (
    <div className={styles.profileSection}>
      <div className={styles.profilePic}></div>
      <h1>Gustavo Henrique | Desenvolvedor</h1>

      <div className={styles.socials}>
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target={link.download ? undefined : "_blank"}
            rel={link.download ? undefined : "noopener noreferrer"}
            download={link.download}
          >
            <img src={link.icon} alt={link.alt} />
          </a>
        ))}
      </div>

      <p className={styles.techText}>
        Atuo no desenvolvimento back-end construindo APIs, aplicações escaláveis e projetos
        estruturados com boas práticas de engenharia de software com Java e Spring. Trabalho
        com arquitetura limpa, princípios SOLID, padrões de projeto, versionamento de código,
        documentação técnica e testes automatizados. Tenho experiência em bancos de dados
        relacionais, estruturas de dados e algoritmos, aplicando soluções eficientes e de qualidade.
      </p>

      <p className={styles.techText}>
        Ao lado lhe apresento alguns projetos pessoais que resolvem problemas do meu dia a dia,
        as soluções foram elaboradas e documentadas visando seguir boas práticas e recursos do
        mercado de desenvolvimente de software.
      </p>
    </div>
  );
};
