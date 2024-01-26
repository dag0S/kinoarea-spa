import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import cn from 'classnames';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './Slider.module.scss';

import MovieItem from '../MovieItem/MovieItem';

const Slider = () => {
  const [movies, setMovies] = useState([]);

  // HYF139P-VWFMMNV-KD6YZB6-RJWSQE2
  // HC8S314-K8XMMYQ-NCWJB2M-HZCM394

  // useEffect(() => {
  //   const options = {
  //     method: 'GET',
  //     headers: { accept: 'application/json', 'X-API-KEY': 'HYF139P-VWFMMNV-KD6YZB6-RJWSQE2' },
  //   };
  //   fetch(
  //     'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=8&selectFields=id&selectFields=name&selectFields=rating&selectFields=genres&selectFields=poster&selectFields=videos&type=anime&year=2022-2024',
  //     options,
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMovies(data.docs);
  //     });
  // }, []);

  return (
    <div className={styles['slider']}>
      <Swiper
        spaceBetween={22}
        slidesPerView={4}
        pagination={{
          el: '#pagination',
          type: 'fraction',
        }}
        navigation={{
          prevEl: '#prevBtn',
          nextEl: '#nextBtn',
        }}
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}>
        {false &&movies.map(({ name, genres, rating, poster, id }) => (
          <SwiperSlide key={id}>
            <MovieItem name={name} genres={genres} poster={poster} rating={rating} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles['slider__bottom-wrap']}>
        <button className={cn(styles['slider__prev'], styles['slider__btn'])} id="prevBtn">
          <img src="/svg/slider-arrow-left.svg" alt="arrow left" />
        </button>
        <div className={styles['slider__pagination']} id="pagination" />
        <button className={cn(styles['slider__next'], styles['slider__btn'])} id="nextBtn">
          <img src="/svg/slider-arrow-right.svg" alt="arrow right" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
