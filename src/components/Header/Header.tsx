import { FC } from 'react';
import Button from '../Button/Button';
import Menu from '../Menu/Menu';
import Socials from '../Socials/Socials';
import styles from './Header.module.scss';
import { SocialsVariant } from '../Socials/SocialsProps';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <header className={styles['header']}>
      <div className="container">
        <div className={styles['header__inner']}>
          <div>
            <Link className={styles['header__logo']} to="/">
              <img src="/svg/logo.svg" alt="Логотип Kinoarea" />
            </Link>
            <Socials size={SocialsVariant.small} />
          </div>
          <Menu />
          <div className={styles['buttons']}>
            <button className={styles['search-button']}>
              <img src="/svg/search-icon.svg" alt="Поиск" />
            </button>
            <Button>Войти</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
