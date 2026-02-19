import { useContext } from 'react';
import { motion } from 'framer-motion';
import { TopNav } from '../Navigation/TopNav';
import { NavigationContext } from '../../context/NavigationContext';
import styles from './Layout.module.css';

const pageVariants = {
  initial: (dir) => ({ opacity: 0, x: dir * 60 }),
  animate: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir * -60 }),
};

export const Layout = ({ children, showTopNav = true }) => {
  const direction = useContext(NavigationContext);

  return (
    <motion.div
      className={styles.layout}
      custom={direction}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.25, ease: 'easeInOut' }}
    >
      {showTopNav && <TopNav />}
      {children}
    </motion.div>
  );
};
