import styles from './Trailers.module.scss';

import ButtonWithArrow from '../../components/ButtonWithArrow/ButtonWithArrow';
import Socials from '../../components/Socials/Socials';
import Title from '../../components/Title/Title';
import ButtonRate from '../../components/ButtonRate/ButtonRate';
import { SocialsVariant } from '../../components/Socials/SocialsProps';
import { ButtonVariant } from '../../components/ButtonRate/ButtonRateProps';
import { FC } from 'react';

const Trailers: FC = () => {
  return (
    <section className={styles['trailers']}>
      <div className="container">
        <div className={styles['trailers__inner']}>
          <div className={styles['trailers__top-wrapper']}>
            <Title>Новые трейлеры</Title>
            <ButtonWithArrow>Все трейлеры</ButtonWithArrow>
          </div>
          <div className={styles['trailer']}>
            <div className={styles['trailer__video']}></div>
            <div className={styles['trailer__wrap-description']}>
              <div className={styles['trailer__wrap-left']}>
                <h4 className={styles['trailer__title']}>Форсаж 9</h4>
                <Socials size={SocialsVariant.big} />
              </div>
              <div className={styles['trailer__wrap-right']}>
                <ButtonRate rate={ButtonVariant.like} />
                <ButtonRate rate={ButtonVariant.dislike} />
              </div>
            </div>
          </div>
          <div className={styles['scroll-line']}>
            <div className={styles['scroll-line__wrap']}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <div className={styles['preview-trailer']} key={item}>
                  <div className={styles['preview-trailer__img']}></div>
                  <h4 className={styles['preview-trailer__title']}>Мулан</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trailers;
