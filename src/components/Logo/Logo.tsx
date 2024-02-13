import { Link } from 'react-router-dom';
import { FC } from 'react';

import styles from './Logo.module.scss';

const Logo: FC = () => {
  return (
    <Link className={styles['logo']} to="/">
      <img src="/svg/logo.svg" alt="Логотип Kinoarea" />
    </Link>
  );
};

export default Logo;
