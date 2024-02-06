import { FC } from 'react';
import cn from 'classnames';

import styles from './Newsletter.module.scss';
import ButtonAccent from '../../components/ButtonAccent/ButtonAccent';

const Newsletter: FC = () => {
  return (
    <section className={styles['newsletter']}>
      <div className={cn('container', styles['newsletter__inner'])}>
        <div className={styles['newsletter__wrap']}>
          <img
            className={styles['newsletter__logo']}
            src="/svg/logo-white.svg"
            alt="Логотип Kinoarea"
          />
          <h2 className={styles['newsletter__title']}>Подпишитесь на E-mail рассылку</h2>
          <p className={styles['newsletter__desc']}>
            Если хотиет быть в курсе последних новостей и новинок кино - заполните форму ниже и
            оформите бесплатную E-mail рассылку!
          </p>
          <form className={styles['newsletter__form']} action="#">
            <div className={styles['newsletter__row']}>
              <input
                className={styles['newsletter__input']}
                name="email"
                type="email"
                placeholder="Введите свой E-mail адрес"
              />
              <ButtonAccent>Подписаться</ButtonAccent>
            </div>
            <div className={styles['newsletter__row']}>
              <input
                className={styles['newsletter__checkbox']}
                id="confirm"
                name="confirm"
                type="checkbox"
              />
              <label htmlFor="confirm">
                <p className={styles['newsletter__policy']}>
                  Соглашаюсь на условия <a href="#">политики конфиденциальности</a>
                </p>
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
