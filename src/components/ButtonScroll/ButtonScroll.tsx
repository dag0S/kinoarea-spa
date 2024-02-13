import { FC, useState } from 'react';
import cn from 'classnames';

import styles from './ButtonScroll.module.scss';

const ButtonScroll: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setIsVisible(true);
    } else if (scrolled <= 400) {
      setIsVisible(false);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button
      className={cn(styles['btn'], {
        [styles['btn--hidden']]: !isVisible,
      })}
      onClick={scrollToBottom}>
      <img src="/svg/arrow-scroll.svg" alt="вверх" />
    </button>
  );
};

export default ButtonScroll;
