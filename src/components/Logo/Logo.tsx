import { Link } from 'react-router-dom';
import { FC } from 'react';
import { LogoProps } from './LogoProps';
import cn from 'classnames';

import styles from './Logo.module.scss';

const Logo: FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link
      className={cn(styles['logo'], {
       [className]: className,
      })}
      to="/">
      <img src="/svg/logo.svg" alt="Логотип Kinoarea" />
    </Link>
  );
};

export default Logo;
