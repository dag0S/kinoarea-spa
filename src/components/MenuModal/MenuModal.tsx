import cn from 'classnames';
import Logo from '../Logo/Logo';
import { FC } from 'react';
import { MenuModalProps } from './MenuModalProps';

import styles from './MenuModal.module.scss';

const MenuModal: FC<MenuModalProps> = ({ onClick, children, className = '' }) => {
  return (
    <div
      className={cn(styles['modal'], {
        [className]: className,
      })}>
      <div className="container">
        <div className={styles['modal__inner']}>
          <div className={styles['modal__utils']}>
            <Logo />
          </div>
          {children}
          <button className={styles['modal__close']} onClick={onClick}>
            <img src="/svg/close-modal.svg" alt="close" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
