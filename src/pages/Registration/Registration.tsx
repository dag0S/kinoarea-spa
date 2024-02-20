import { FC } from 'react';
import ButtonAccent from '../../components/ButtonAccent/ButtonAccent';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import TitleAuth from '../../components/TitleAuth/TitleAuth';

import styles from './Registration.module.scss';

const Registration: FC = () => {
  return (
    <div className={styles['registration']}>
      <div className="container-auth">
        <TitleAuth className={styles['registration__title']}>Зарегистрироваться</TitleAuth>
        <Form>
          <Input name="firstName" type="text" placeholder="Имя" />
          <Input name="lastName" type="text" placeholder="Фамилия" />
          <Input name="login" type="text" placeholder="Придумайте логин" />
          <Input name="password" type="password" placeholder="Придумайте пароль" />
          <Input name="passwordConfirmed" type="password" placeholder="Повторите пароль" />
          <Input name="emailOrTel" type="email" placeholder="Номер телефона или e-mail" />
          <ButtonAccent>Зарегистрироваться</ButtonAccent>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
