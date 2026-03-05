import { Layout } from '../../components/Layout/Layout';
import { NavArrows } from '../../components/Navigation/NavArrows';
import { ProfileSection } from '../../components/ProfileSection/ProfileSection';
import { TechStack } from '../../components/TechStack/TechStack';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <Layout>
      <NavArrows leftPath="/curriculo" rightPath="/medias" />
      <main className={styles.hero}>
        <ProfileSection />
        <TechStack />
      </main>
    </Layout>
  );
};
