import styles from './VideoPlayer.module.css';

const getYouTubeVideoId = (url) => {
  if (!url) return null;

  // Match YouTube URL patterns
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/ // Direct video ID
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
};

export const VideoPlayer = ({ videoSrc, posterSrc }) => {
  const youtubeVideoId = getYouTubeVideoId(videoSrc);

  // If it's a YouTube URL, render iframe
  if (youtubeVideoId) {
    return (
      <iframe
        className={styles.videoPlayer}
        src={`https://www.youtube.com/embed/${youtubeVideoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  // Otherwise, render standard video element
  return (
    <video className={styles.videoPlayer} controls poster={posterSrc}>
      <source src={videoSrc} type="video/mp4" />
      Seu navegador não suporta vídeo HTML5.
    </video>
  );
};
