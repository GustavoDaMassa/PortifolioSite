import { TopNav } from '../Navigation/TopNav';
import styles from './Layout.module.css';

export const Layout = ({ children, showTopNav = true }) => {
  return (
    <div className={styles.layout}>
      {showTopNav && <TopNav />}
      {children}
    </div>
  );
};
