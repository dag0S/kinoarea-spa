import { FC, useState } from 'react';
import Button from '../Button/Button';
import Menu from '../Menu/Menu';
import Socials from '../Socials/Socials';
import { SocialsVariant } from '../Socials/SocialsProps';
import Logo from '../Logo/Logo';
import MenuModal from '../MenuModal/MenuModal';

import styles from './Header.module.scss';
import Search from '../Search/Search';

const Header: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);

  return (
    <header className={styles['header']}>
      <div className="container">
        <div className={styles['header__inner']}>
          <div>
            <Logo />
            <Socials size={SocialsVariant.small} />
          </div>
          <Menu />
          <div className={styles['buttons']}>
            <button className={styles['search-button']} onClick={() => setIsSearch(true)}>
              <img src="/svg/lupa.svg" alt="Поиск" />
            </button>
            <Button>Войти</Button>
          </div>
        </div>

        <div className={styles['header__inner-mobile']}>
          <div className={styles['header__top-wrap']}>
            <div className={styles['header__wrap-btns']}>
              <button className={styles['menu-button']} onClick={() => setIsVisible(true)}>
                <img src="/svg/hamburger.svg" alt="Меню" />
              </button>
              <button className={styles['search-button']} onClick={() => setIsSearch(true)}>
                <img src="/svg/lupa.svg" alt="Поиск" />
              </button>
              {isVisible && (
                <MenuModal onClick={() => setIsVisible(false)}>
                  <Menu />
                </MenuModal>
              )}
            </div>
            <div className={styles['header__wrap-logo']}>
              <Logo />
              <Socials size={SocialsVariant.small} />
            </div>
            <Button className={styles['header__btn-login']}>Войти</Button>
          </div>
          <div className={styles['header__bottom-wrap']}>
            <Menu />
          </div>
        </div>

        {isSearch && (
          <MenuModal className={styles['visible']} onClick={() => setIsSearch(false)}>
            <Search onClick={() => setIsSearch(false)} />
          </MenuModal>
        )}
      </div>
    </header>
  );
};

export default Header;
