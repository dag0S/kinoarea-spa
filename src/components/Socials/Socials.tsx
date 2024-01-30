import { FC } from 'react';
import styles from './Socials.module.scss';
import cn from 'classnames';
import { SocialsProps, SocialsVariant } from './SocialsProps';

const Socials: FC<SocialsProps> = ({ size }) => {
  return (
    <ul
      className={cn(styles['socials'], {
        [styles['bigIcons']]: size === SocialsVariant.big,
      })}>
      <li>
        <a href="#">
          <img src="/svg/vk-icon.svg" alt="VK иконка" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="/svg/instagram-icon.svg" alt="Instagram иконка" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="/svg/facebook-icon.svg" alt="Facebook иконка" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="/svg/telegram-icon.svg" alt="Telegram иконка" />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
