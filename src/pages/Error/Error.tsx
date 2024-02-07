import { FC } from 'react';
import cn from 'classnames';

import styles from './Error.module.scss';
import Button from '../../components/Button/Button';
import ButtonAccent from '../../components/ButtonAccent/ButtonAccent';

const Error: FC = () => {
  return (
    <section className={styles['error']}>
      <div className={cn('container', styles['error__inner'])}>
        <h2 className={styles['error__title']}>
          <span>404</span> <br />
          Кина не будет :(
        </h2>
        <p className={styles['error__desc']}>
          Возможно, данного адреса страницы не сущетсвует, или странциа была перемещена.
        </p>
        <div className={styles['error__btns']}>
          <Button>Вернуться на главную</Button>
          <ButtonAccent>Поиск по сайту</ButtonAccent>
        </div>
      </div>
    </section>
  );
};

export default Error;
