import { FC } from 'react';
import Slider from '../../components/Slider/Slider';
import Title from '../../components/Title/Title';
import cn from 'classnames';

import styles from './ExpectedFilms.module.scss';

const ExpectedFilms: FC = () => {
  return (
    <section className={styles['expected-films']}>
      <div className={cn('container', styles['expected-films__inner'])}>
        <div className={styles['expected-films__top-wrap']}>
          <Title>Ожидаемые новинки</Title>
        </div>
        <Slider idSlider={2} />
      </div>
    </section>
  );
};

export default ExpectedFilms;
