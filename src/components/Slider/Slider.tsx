import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import 'swiper/css';
import MovieItem from '../MovieItem/MovieItem';

const Slider = () => {
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
    <div>
      <Swiper
        spaceBetween={22}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        {movies.map(({ name, genres, rating, poster, id }) => (
          <SwiperSlide>
            <MovieItem name={name} genres={genres} poster={poster} rating={rating} key={id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
