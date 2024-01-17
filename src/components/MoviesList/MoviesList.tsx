import MovieItem from '../MovieItem/MovieItem';

import styles from './MoviesList.module.scss';

const movies = [
  {
    id: 1,
    title: 'Побег из Претории',
    genres: ['Триллер', 'Тюрьма'],
    rating: 6.7,
    imgPath: '/img/demo-posters/poster-1.png',
  },
  {
    id: 2,
    title: 'Побег из Претории',
    genres: ['Триллер', 'Тюрьма'],
    rating: 6.7,
    imgPath: '/img/demo-posters/poster-1.png',
  },
  {
    id: 2,
    title: 'Побег из Претории',
    genres: ['Триллер', 'Тюрьма'],
    rating: 6.7,
    imgPath: '/img/demo-posters/poster-1.png',
  },
  {
    id: 2,
    title: 'Побег из Претории',
    genres: ['Триллер', 'Тюрьма'],
    rating: 6.7,
    imgPath: '/img/demo-posters/poster-1.png',
  },
  {
    id: 2,
    title: 'Побег из Претории',
    genres: ['Триллер', 'Тюрьма'],
    rating: 6.7,
    imgPath: '/img/demo-posters/poster-1.png',
  },
];

const MoviesList = () => {
  return (
    <div className={styles['movies']}>
      {movies.map((movie) => (
        <MovieItem {...movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MoviesList;
