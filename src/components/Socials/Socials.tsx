import styles from './Socials.module.scss';

const Socials = () => {
  return (
    <ul className={styles['socials']}>
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
