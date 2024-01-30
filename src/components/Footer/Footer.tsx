import styles from './Footer.module.scss';
import cn from 'classnames';

import Menu from '../Menu/Menu';
import Socials from '../Socials/Socials';
import { FC } from 'react';
import { SocialsVariant } from '../Socials/SocialsProps';

const Footer: FC = () => {
  return (
    <footer className={styles['footer']}>
      <div className="container">
        <div className={styles['footer__inner']}>
          <Socials size={SocialsVariant.big} />
          <Menu />
          <p className={styles['footer__text']}>2020 © Kinoarea. Все права защищены</p>
          <a className={cn(styles['footer__text'], styles['footer__text--underline'])} href="#">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
