import styles from './ContextoBanner.module.css';

export const ContextoBanner = () => (
  <div className={styles.banner}>
    <span className={styles.icon}>🎓</span>
    <p>
      Toda essa trajetória foi construída conciliando a graduação em{' '}
      <strong>Ciência da Computação na UFG</strong> (2022–2026) com estudos
      autodidatas contínuos — sem emprego formal, sem bootcamp, sem atalhos.
    </p>
  </div>
);
