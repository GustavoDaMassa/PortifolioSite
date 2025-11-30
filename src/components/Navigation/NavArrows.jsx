import { useNavigate } from 'react-router-dom';
import styles from './Navigation.module.css';

export const NavArrows = ({ leftPath, rightPath }) => {
  const navigate = useNavigate();

  return (
    <>
      {leftPath && (
        <button
          className={`${styles.navArrow} ${styles.left}`}
          onClick={() => navigate(leftPath)}
        >
          ←
        </button>
      )}
      {rightPath && (
        <button
          className={`${styles.navArrow} ${styles.right}`}
          onClick={() => navigate(rightPath)}
        >
          →
        </button>
      )}
    </>
  );
};
