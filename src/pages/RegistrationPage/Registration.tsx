import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';
import styles from './registration.module.css';
import { AuthorizationForm } from '@components/authorizationForm/AuthorizationForm';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { createUser } from 'src/store/api/userApiFunctions';

const REGISTRATION_FORM_ELEMENTS = [
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
    label: 'Подтвердите пароль',
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
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | undefined>();
  const registration = async data => {
    const { name, surname, email, login, password } = data;
    const user = { name, surname, email, login, password };
    console.log('registration');
    setIsLoading(true);
    const response = await createUser(user);
    if (response.status === 200) {
      setTimeout(() => setIsSuccess(true), 1000);
    } else {
      console.log(response.status + ' ' + response.message);
      setTimeout(() => setIsSuccess(false), 1000);
    }
  };

  if (isSuccess) {
    setTimeout(() => navigate('/'), 1000);
    return (
      <>
        <Header></Header>
        <h1>Регистрация</h1>
        <div className={styles.successPage}>Регистрация прошла успешно!</div>
        <Footer></Footer>
      </>
    );
  }

  if (isSuccess === false) {
    setTimeout(() => navigate('/'), 2000);
    return (
      <>
        <Header></Header>
        <h1>Регистрация</h1>
        <div className={styles.successPage}>Что-то пошло не так. Попробуйте еще раз позже!</div>
        <Footer></Footer>
      </>
    );
  }

  return (
    <>
      <Header></Header>
      <h1>Регистрация</h1>
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
      {isLoading && (
        <p style={{ textAlign: 'center', margin: '10px 0px' }}>Данные отправляются на сервер...</p>
      )}
      <Footer></Footer>
    </>
  );
};
