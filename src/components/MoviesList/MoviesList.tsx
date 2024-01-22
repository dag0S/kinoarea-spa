import { useEffect, useState } from 'react';
import MovieItem from '../MovieItem/MovieItem';

import styles from './MoviesList.module.scss';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'X-API-KEY': 'HC8S314-K8XMMYQ-NCWJB2M-HZCM394' },
    };
    fetch(
      'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=8&selectFields=id&selectFields=name&selectFields=rating&selectFields=genres&selectFields=poster&selectFields=videos&type=anime&year=2022-2024',
      options,
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.docs);
      });
  }, []);

  return (
    <div className={styles['movies']}>
      {movies.map(({ name, genres, rating, poster, id }) => (
        <MovieItem name={name} genres={genres} poster={poster} rating={rating} key={id} />
      ))}
    </div>
  );
};

export default MoviesList;
