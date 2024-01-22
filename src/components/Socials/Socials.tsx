import styles from './Socials.module.scss';
import cn from 'classnames';

const Socials = ({ isBig }) => {
  return (
    <ul
      className={cn(styles['socials'], {
        [styles['bigIcons']]: isBig,
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
