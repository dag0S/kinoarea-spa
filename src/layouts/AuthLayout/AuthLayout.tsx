import { Outlet } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import { FC } from 'react';
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';

import styles from './AuthLayout.module.scss';

const AuthLayout: FC = () => {
  return (
    <MouseParallaxContainer resetOnLeave className={styles['layout']}>
      <div className={styles['layout__left']}>
        <MouseParallaxChild factorX={0.005} factorY={0.005} className={styles['layout__img']} />
        <Logo className={styles['layout__logo']} />
      </div>
      <div className={styles['layout__right']}>
        <Outlet />
      </div>
    </MouseParallaxContainer>
  );
};

export default AuthLayout;
