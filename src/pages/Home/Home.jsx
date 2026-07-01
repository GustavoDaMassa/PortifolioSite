import { Layout } from '../../components/Layout/Layout';
import { NavArrows } from '../../components/Navigation/NavArrows';
import { ProfileSection } from '../../components/ProfileSection/ProfileSection';
import { IntroSection } from '../../components/IntroSection/IntroSection';
import styles from './Home.module.css';

export const HomeContent = ({ showNavArrows = true }) => {
  return (
    <>
      {showNavArrows && <NavArrows leftPath="/curriculo" rightPath="/projetos" />}
      <main className={styles.hero}>
        <ProfileSection />
        <IntroSection />
      </main>
    </>
  );
};

export const Home = () => {
  return (
    <Layout>
      <HomeContent />
    </Layout>
  );
};
