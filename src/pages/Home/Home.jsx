import { Layout } from '../../components/Layout/Layout';
import { ProfileSection } from '../../components/ProfileSection/ProfileSection';
import { TechStack } from '../../components/TechStack/TechStack';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <Layout>
      <main className={styles.hero}>
        <ProfileSection />
        <TechStack />
      </main>
    </Layout>
  );
};
