import { FC, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import cn from 'classnames';
import MovieItem from '../MovieItem/MovieItem';
import axios from 'axios';
import { IMovie } from '../../types/types';
import { SliderProps } from './SliderProps';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './Slider.module.scss';

// HYF139P-VWFMMNV-KD6YZB6-RJWSQE2
// HC8S314-K8XMMYQ-NCWJB2M-HZCM394

const options = {
  method: 'GET',
  headers: { accept: 'application/json', 'X-API-KEY': 'HYF139P-VWFMMNV-KD6YZB6-RJWSQE2' },
};

const Slider: FC<SliderProps> = ({ idSlider }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  // const fetchMovies = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=8&selectFields=id&selectFields=name&selectFields=rating&selectFields=genres&selectFields=poster&selectFields=videos&type=anime&year=2022-2024',
  //       options,
  //     );
  //     setMovies(data.docs);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchMovies();
  // }, []);

  return (
    <div className={styles['slider']}>
      <Swiper
        spaceBetween={22}
        slidesPerView={4}
        pagination={{
          el: `#pagination-${idSlider}`,
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
        modules={[Pagination, Navigation, Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 14,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 14,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 23,
          },
        }}>
        {movies.length > 0 &&
          movies.map(({ name, genres, rating, poster, id }) => (
            <SwiperSlide key={id}>
              <MovieItem name={name} genres={genres} poster={poster} rating={rating} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className={styles['slider__bottom-wrap']}>
        <button className={cn(styles['slider__prev'], styles['slider__btn'])} id="prevBtn">
          <img src="/svg/slider-arrow-left.svg" alt="arrow left" />
        </button>
        <div className={styles['slider__pagination']} id={`pagination-${idSlider}`} />
        <button className={cn(styles['slider__next'], styles['slider__btn'])} id="nextBtn">
          <img src="/svg/slider-arrow-right.svg" alt="arrow right" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
