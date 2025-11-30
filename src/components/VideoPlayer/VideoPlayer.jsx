import styles from './VideoPlayer.module.css';

export const VideoPlayer = ({ videoSrc, posterSrc }) => {
  return (
    <video className={styles.videoPlayer} controls poster={posterSrc}>
      <source src={videoSrc} type="video/mp4" />
      Seu navegador não suporta vídeo HTML5.
    </video>
  );
};
