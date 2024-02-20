import { FC } from 'react';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import ButtonAccent from '../../components/ButtonAccent/ButtonAccent';
import TitleAuth from '../../components/TitleAuth/TitleAuth';

import styles from './Restore.module.scss';

const Restore: FC = () => {
  return (
    <div className={styles['restore']}>
      <div className="container-auth">
        <TitleAuth className={styles['restore__title']}>Восстановить пароль</TitleAuth>
        <Form>
          <Input name="password" type="password" placeholder="Восстановить пароль" />
          <Input name="passwordConfirmed" type="password" placeholder="Подтвердите новый пароль" />
          <ButtonAccent>Готово!</ButtonAccent>
        </Form>
      </div>
    </div>
  );
};

export default Restore;
