import { useContext } from 'react';
import { motion as Motion } from 'framer-motion';
import { TopNav } from '../Navigation/TopNav';
import { NavigationContext } from '../../context/NavigationContext';
import styles from './Layout.module.css';

const pageVariants = {
  initial: ({ direction, isFirstLoad }) => ({
    opacity: 0,
    x: isFirstLoad ? 0 : direction * 60,
    y: isFirstLoad ? 24 : 0,
    filter: isFirstLoad ? 'blur(12px)' : 'blur(0px)',
  }),
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    filter: 'blur(0px)',
  },
  exit: ({ direction }) => ({ opacity: 0, x: direction * -60 }),
};

export const Layout = ({ children, showTopNav = true }) => {
  const { direction, isFirstLoad } = useContext(NavigationContext);

  return (
    <Motion.div
      className={styles.layout}
      custom={{ direction, isFirstLoad }}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: isFirstLoad ? 1.2 : 0.25, ease: 'easeOut' }}
    >
      {showTopNav && <TopNav />}
      {children}
    </Motion.div>
  );
};
