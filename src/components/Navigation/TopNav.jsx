import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export const TopNav = () => {
  return (
    <nav className={styles.topNav}>
      <Link to="/medias">MediasAPI</Link>
      <Link to="/finance">FinanceAPI</Link>
      <Link to="/projetos">Todos os Projetos</Link>
    </nav>
  );
};
