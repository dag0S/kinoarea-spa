import { FC, useState } from 'react';
import { ButtonRateProps, ButtonVariant } from './ButtonRateProps';
import cn from 'classnames';

import styles from './ButtonRate.module.scss';

const ButtonRate: FC<ButtonRateProps> = ({ rate, amount }) => {
  const [isVoted, setIsVoted] = useState<boolean>(false);
  let icon;

  if (isVoted) amount++;

  if (rate === ButtonVariant.like) {
    icon = (
      <svg
        width="32"
        height="34"
        viewBox="0 0 32 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_1775)" filter="url(#filter0_d_1_1775)">
          <path
            d="M8.23803 12.262H5.18512C4.76363 12.262 4.42188 12.6037 4.42188 13.0252V25.2366C4.42188 25.6581 4.76358 25.9999 5.18512 25.9999H8.23798C8.65946 25.9999 9.00122 25.6582 9.00122 25.2366V13.0252C9.00122 12.6037 8.65956 12.262 8.23803 12.262Z"
            fill="white"
          />
          <path
            d="M27.3049 14.2852C27.1703 13.1012 26.0643 12.2621 24.8727 12.2621H18.9225C19.4281 11.3566 19.6996 8.79556 19.6875 7.74937C19.6676 6.01763 18.2335 4.62988 16.5017 4.62988H15.8719C15.45 4.62988 15.1086 4.97123 15.1086 5.39312C15.1086 7.15802 14.4214 10.3436 13.1253 11.6398C12.253 12.5121 11.5072 12.8282 10.5293 13.317V24.769C12.0265 25.2681 13.9274 26.0001 16.8248 26.0001H21.8174C23.4625 26.0001 24.7437 24.4765 24.1062 22.8667C25.0774 22.6021 25.7937 21.7114 25.7937 20.6575C25.7937 20.3601 25.7363 20.0754 25.6327 19.8138C27.2693 19.3679 27.8717 17.3471 26.7358 16.0782C27.1531 15.612 27.3833 14.9743 27.3049 14.2852Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1_1775"
            x="-1.12891"
            y="0"
            width="34"
            height="34"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1775" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_1775"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_1_1775">
            <rect width="26" height="26" fill="white" transform="translate(2.87109)" />
          </clipPath>
        </defs>
      </svg>
    );
  } else {
    icon = (
      <svg
        width="32"
        height="30"
        viewBox="0 0 32 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3874_2)" filter="url(#filter0_d_3874_2)">
          <path
            d="M23.7307 13.8359L26.7836 13.8359C27.2051 13.8359 27.5469 13.4942 27.5469 13.0727L27.5469 0.861251C27.5469 0.439768 27.2052 0.0980114 26.7836 0.0980114L23.7308 0.0980111C23.3093 0.0980111 22.9675 0.439717 22.9675 0.861251L22.9675 13.0727C22.9675 13.4942 23.3092 13.8359 23.7307 13.8359Z"
            fill="white"
          />
          <path
            d="M4.66385 11.8127C4.79847 12.9967 5.90443 13.8358 7.09601 13.8358L13.0463 13.8358C12.5406 14.7413 12.2692 17.3023 12.2812 18.3485C12.3012 20.0803 13.7353 21.468 15.4671 21.468L16.0969 21.468C16.5187 21.468 16.8601 21.1267 16.8601 20.7048C16.8601 18.9399 17.5473 15.7543 18.8434 14.4581C19.7158 13.5858 20.4616 13.2697 21.4395 12.7809L21.4395 1.32887C19.9423 0.829844 18.0413 0.0978349 15.1439 0.0978346L10.1513 0.0978342C8.50626 0.097834 7.22505 1.62142 7.8625 3.23118C6.89131 3.49575 6.1751 4.38645 6.1751 5.44037C6.1751 5.73779 6.23248 6.02247 6.33607 6.2841C4.69945 6.73 4.09703 8.75084 5.23295 10.0197C4.81563 10.4859 4.58549 11.1236 4.66385 11.8127Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_3874_2"
            x="-0.902344"
            y="0.0979004"
            width="34"
            height="34"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3874_2" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_3874_2"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_3874_2">
            <rect
              width="26"
              height="26"
              fill="white"
              transform="translate(29.0977 26.0979) rotate(-180)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <div className={styles['rating']}>
      <button
        className={cn(styles['rating__btn'], {
          [styles['rating__btn--is-voted']]: isVoted,
        })}
        onClick={() => setIsVoted((prev) => !prev)}>
        {icon}
      </button>
      <p className={styles['rating__counter']}>{amount}</p>
    </div>
  );
};

export default ButtonRate;
