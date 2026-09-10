import { Layout } from '../../components/Layout/Layout';
import { ProfileSection } from '../../components/ProfileSection/ProfileSection';
import { IntroSection } from '../../components/IntroSection/IntroSection';
import styles from './Home.module.css';

export const HomeContent = () => {
  return (
    <main className={styles.hero}>
      <ProfileSection />
      <IntroSection />
    </main>
  );
};

export const Home = () => {
  return (
    <Layout>
      <HomeContent />
    </Layout>
  );
};
