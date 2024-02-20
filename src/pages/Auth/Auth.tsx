import { FC } from 'react';
import cn from 'classnames';
import TitleAuth from '../../components/TitleAuth/TitleAuth';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import ButtonAccent from '../../components/ButtonAccent/ButtonAccent';
import ButtonAuth from '../../components/ButtonAuth/ButtonAuth';
import { Link } from 'react-router-dom';

import styles from './Auth.module.scss';
import Socials from '../../components/Socials/Socials';
import { SocialsVariant } from '../../components/Socials/SocialsProps';

const Auth: FC = () => {
  return (
    <div className={styles['auth']}>
      <div className={cn('container-auth', styles['auth__inner'])}>
        <TitleAuth className={styles['auth__title']}>Войти</TitleAuth>
        <Form className={styles['auth__form']}>
          <Input name="login" type="text" placeholder="Логин, почта или телефон" />
          <Input name="password" type="password" placeholder="Ваш пароль" />
          <ButtonAccent>Войти</ButtonAccent>
          <ButtonAuth path="/auth/registration">Зарегистрироваться</ButtonAuth>
        </Form>
        <Link to="/auth/restore" className={styles['auth__restore']}>
          Восстановить пароль
        </Link>
        <Socials size={SocialsVariant.big} />
      </div>
    </div>
  );
};

export default Auth;
