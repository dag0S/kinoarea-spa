import { Outlet } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import { FC } from 'react';

import styles from './AuthLayout.module.scss';

const AuthLayout: FC = () => {
  return (
    <div className={styles['layout']}>
      <div className={styles['layout__left']}>
        <Logo className={styles['layout__logo']} />
      </div>
      <div className={styles['layout__right']}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
