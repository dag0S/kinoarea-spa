import styles from './MovieItem.module.scss';

const MovieItem = ({ name, genres, rating, poster }) => {
  return (
    <div className={styles['movie']}>
      <div className={styles['movie__img']} style={{ backgroundImage: `url(${poster.url})` }}>
        <div className={styles['overlay']}>
          <a className={styles['overlay__button']} href="/">
            Карточка фильма
          </a>
        </div>
        <div className={styles['movie__rating']}>{rating.kp.toFixed(2)}</div>
      </div>
      <h3 className={styles['movie__title']}>{name}</h3>
      <p className={styles['movie__genres']}>
        {genres.map((gener, index) =>
          genres.length === index + 1 ? gener.name : `${gener.name}, `,
        )}
      </p>
    </div>
  );
};

export default MovieItem;
