import cn from 'classnames';
import styles from './AboutMovie.module.scss';
import Title from '../../components/Title/Title';
import Socials from '../../components/Socials/Socials';
import { SocialsVariant } from '../../components/Socials/SocialsProps';

const AboutMovie = () => {
  return (
    <section
      className={styles['about-movie']}
      style={{ backgroundImage: `linear-gradient(360deg, var(--background-color) 0%, rgba(0, 0, 0, 0) 100%), url("/img/demo/poster-1.png")` }}>
      <div className={cn('container', styles['about-movie__inner'])}>
        <div className={styles['about-movie__top-wrap']}>
          <div
            className={styles['about-movie__poster']}
            style={{ backgroundImage: `url("/img/demo/poster-1.png")` }}
          />
          <div className={styles['about-movie__info']}>
            <div className={styles['about-movie__breadcrumbs']}>
              <span>
                Главная {'>'} Фильмы {'>'}{' '}
              </span>{' '}
              Побег из Претории
            </div>
            <Title>Побег из Претории</Title>
            <h2 className={styles['about-movie__alt-title']}>Escape from Pretoria</h2>
            <p className={styles['about-movie__desc']}>
              Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в
              «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но
              придумать план — это только первый шаг. Шаг второй — реализация плана.
            </p>
            <Socials size={SocialsVariant.small} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMovie;
