import styles from './MovieItem.module.scss';

const MovieItem = ({ title, genres, rating, imgPath }) => {
  return (
    <div className={styles['movie']}>
      <div className={styles['movie__img']} style={{ backgroundImage: `url(${imgPath})` }}>
        <div className={styles['overlay']}>
          <a className={styles['overlay__button']} href="/">Карточка фильма</a>
        </div>
        <div className={styles['movie__rating']}>{rating}</div>
      </div>
      <h3 className={styles['movie__title']}>{title}</h3>
      <p className={styles['movie__genres']}>
        {genres.map((gener, index) => (genres.length === index + 1 ? gener : `${gener}, `))}
      </p>
    </div>
  );
};

export default MovieItem;
