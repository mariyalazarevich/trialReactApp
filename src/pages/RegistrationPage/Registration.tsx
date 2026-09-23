import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';
import styles from './registration.module.css';
import { AuthorizationForm } from '@components/authorizationForm/AuthorizationForm';
import { useNavigate } from 'react-router';

const REGISTRATION_FORM_ELEMENTS = [
  {
    label: 'Логин',
    placeholder: 'Логин',
    id: 'login',
    type: 'text',
    rules: {
      required: 'Это поле обязательно',
      pattern: { value: /^[A-Za-zА-Яа-я]+$/, message: 'Неверный формат данных' },
    },
  },
  {
    label: 'Email',
    placeholder: 'email@gmail.com',
    id: 'email',
    type: 'email',
    rules: {
      required: 'Это поле обязательно',
      pattern: {
        value:
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        message: 'Неверный формат данных',
      },
    },
  },
  {
    label: 'Имя',
    placeholder: 'Иван',
    id: 'name',
    type: 'text',
    rules: {
      required: 'Это поле обязательно',
      pattern: { value: /^[A-Za-zА-Яа-я]+$/, message: 'Неверный формат данных' },
    },
  },
  {
    label: 'Фамилия',
    placeholder: 'Иванов',
    id: 'surname',
    type: 'text',
    rules: {
      required: 'Это поле обязательно',
      pattern: { value: /^[A-Za-zА-Яа-я]+$/, message: 'Неверный формат данных' },
    },
  },
  {
    label: 'Пароль',
    placeholder: 'Пароль',
    id: 'password',
    type: 'text',
    rules: {
      required: 'Это поле обязательно',
      pattern: { value: /^[A-Za-zА-Яа-я]+$/, message: 'Неверный формат данных' },
    },
  },
  {
    label: 'ПовторныйПароль',
    placeholder: 'Подтвердите пароль',
    id: 'repeatPassword',
    type: 'text',
    rules: {
      required: 'Это поле обязательно',
      pattern: { value: /^[A-Za-zА-Яа-я]+$/, message: 'Неверный формат данных' },
    },
  },
];

export const Registration = () => {
  const navigate = useNavigate();

  const registration = () => {
    console.log('registration');
  };

  return (
    <>
      <Header></Header>
      <h1>Авторизация</h1>
      <AuthorizationForm
        formElements={REGISTRATION_FORM_ELEMENTS}
        submitButtonLabel="Зарегистрироваться"
        submitButton={registration}
      />
      <div
        className={styles.authorizationButtonContainer}
        onClick={() => navigate('/authorization')}
      >
        <p className={styles.authorizationButton}>Уже есть аккаунт?</p>
      </div>
      <Footer></Footer>
    </>
  );
};
