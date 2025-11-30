import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout/Layout';
import { ProfileSection } from '../../components/ProfileSection/ProfileSection';
import { TechStack } from '../../components/TechStack/TechStack';
import { useSwipe } from '../../hooks/useSwipe';
import styles from './Home.module.css';

export const Home = () => {
  const navigate = useNavigate();

  useSwipe(
    () => navigate('/medias'), // Swipe left -> próxima página
    null // Sem página anterior
  );

  return (
    <Layout>
      <main className={styles.hero}>
        <ProfileSection />
        <TechStack />
      </main>
    </Layout>
  );
};
