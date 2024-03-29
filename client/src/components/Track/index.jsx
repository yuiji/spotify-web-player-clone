import styles from './track.module.scss';

const Track = ({ track, index, type }) => {
  return (
    <div className={`${styles.track} ${type === 'Search' ? styles.search : ''}`}>
      <span className={styles.order}>{index + 1}</span>
      <img src={track.album.images[1].url} alt='' />
      <div className={styles.text}>
        <span className={styles.name}>{track.name}</span>
        <span>{track.artists[0].name}</span>
      </div>
    </div>
  );
};

export default Track;
