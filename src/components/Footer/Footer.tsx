import styles from './Footer.module.scss';
import cn from 'classnames';

import Menu from '../Menu/Menu';
import Socials from '../Socials/Socials';

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className="container">
        <div className={styles['footer__inner']}>
          <Socials isBig={true} />
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
