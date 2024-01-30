import { useEffect, useState } from 'react';
import Categories from '../../components/Categories/Categories';
import DecorLine from '../../components/DecorLine/DecorLine';
import Title from '../../components/Title/Title';
import MovieItem from '../../components/MovieItem/MovieItem';

import styles from './CinemaNow.module.scss';

const categoriesList = [
  'Все',
  'Боевики',
  'Приключения',
  'Комедии',
  'Фантастика',
  'Триллеры',
  'Драма',
];

const CinemaNow = () => {
  const [movies, setMovies] = useState([]);

  // HYF139P-VWFMMNV-KD6YZB6-RJWSQE2
  // HC8S314-K8XMMYQ-NCWJB2M-HZCM394

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'X-API-KEY': 'HYF139P-VWFMMNV-KD6YZB6-RJWSQE2' },
    };
    fetch(
      'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=8&selectFields=id&selectFields=name&selectFields=rating&selectFields=genres&selectFields=poster&selectFields=videos&type=anime&year=2022-2024',
      options,
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.docs);
        console.log(data.docs[0]);
      });
  }, []);

  return (
    <section className={styles['cinema-now']}>
      <div className="container">
        <div className={styles['cinema-now__inner']}>
          <div className={styles['cinema-now__top']}>
            <Title>Сейчас в кино</Title>
            <DecorLine />
            <Categories list={categoriesList} />
          </div>
          <div className={styles['movies']}>
            {movies.map(({ name, genres, rating, poster, id }) => (
              <MovieItem name={name} genres={genres} poster={poster} rating={rating} key={id} />
            ))}
          </div>
          <a className={styles['cinema-now__btn']} href="/">
            Все новинки
          </a>
        </div>
      </div>
    </section>
  );
};

export default CinemaNow;
