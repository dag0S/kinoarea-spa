import styles from './Trailers.module.scss';

import ButtonWithArrow from '../../components/ButtonWithArrow/ButtonWithArrow';
import Socials from '../../components/Socials/Socials';
import Title from '../../components/Title/Title';
import ButtonRate from '../../components/ButtonRate/ButtonRate';
import { SocialsVariant } from '../../components/Socials/SocialsProps';
import { ButtonVariant } from '../../components/ButtonRate/ButtonRateProps';
import { FC, useState } from 'react';
import { trailersList } from '../../assets/trailersList';
import { ITrailer } from '../../types/types';

const Trailers: FC = () => {
  const [curTrailer, setCurTrailer] = useState<number>(0);
  const [isPlay, setIsPlay] = useState<boolean>(false);

  const trailer: ITrailer = trailersList[curTrailer];

  return (
    <section className={styles['trailers']}>
      <div className="container">
        <div className={styles['trailers__inner']}>
          <div className={styles['trailers__top-wrapper']}>
            <Title>Новые трейлеры</Title>
            <ButtonWithArrow>Все трейлеры</ButtonWithArrow>
          </div>
          <div className={styles['trailer']}>
            {isPlay ? (
              <iframe
                className={styles['trailer__video']}
                src={`https://youtube.com/embed/${trailer.youtubeId}?autoplay=1&mute=1`}
                allow="autoplay"></iframe>
            ) : (
              <div
                className={styles['trailer__preview']}
                style={{
                  backgroundImage: `url(//img.youtube.com/vi/${trailer.youtubeId}/maxresdefault.jpg)`,
                }}
                onClick={() => setIsPlay(true)}>
                <img className={styles['trailer__play']} src="/public/svg/play.svg" alt="play" />
              </div>
            )}
            <div className={styles['trailer__wrap-description']}>
              <div className={styles['trailer__wrap-left']}>
                <h4 className={styles['trailer__title']}>{trailer.title}</h4>
                <Socials size={SocialsVariant.big} />
              </div>
              <div className={styles['trailer__wrap-right']}>
                <ButtonRate rate={ButtonVariant.like} amount={trailer.likes} />
                <ButtonRate rate={ButtonVariant.dislike} amount={trailer.dislikes} />
              </div>
            </div>
          </div>
          <div className={styles['scroll-line']}>
            <div className={styles['scroll-line__wrap']}>
              {trailersList.map((trailer, i) => (
                <div className={styles['preview-trailer']} key={trailer.id}>
                  <div
                    className={styles['preview-trailer__img']}
                    style={{
                      backgroundImage: `url(//img.youtube.com/vi/${trailer.youtubeId}/maxresdefault.jpg)`,
                    }}
                    onClick={() => {
                      setCurTrailer(i);
                      setIsPlay(false);
                    }}>
                    <div className={styles['overlay']}>
                      <img
                        className={styles['overlay__play']}
                        src="/public/svg/play.svg"
                        alt="play"
                      />
                    </div>
                  </div>
                  <h4 className={styles['preview-trailer__title']}>{trailer.title}</h4>
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
