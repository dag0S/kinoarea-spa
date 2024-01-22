import styles from './Trailers.module.scss';

import ButtonWithArrow from '../../components/ButtonWithArrow/ButtonWithArrow';
import Socials from '../../components/Socials/Socials';
import Title from '../../components/Title/Title';
import ButtonRate from '../../components/ButtonRate/ButtonRate';

const Trailers = () => {
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
                <Socials isBig={false} />
              </div>
              <div className={styles['trailer__wrap-right']}>
                <ButtonRate rate="like" />
                <ButtonRate rate="dislike" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trailers;
