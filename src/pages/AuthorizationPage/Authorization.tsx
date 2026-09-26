import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';
import styles from './authorization.module.css';
import { AuthorizationForm } from '@components/authorizationForm/AuthorizationForm';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { logIn } from 'src/store/api/userApiFunctions';

const AUTHORIZATION_FORM_ELEMENTS = [
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
];

export const Authorization = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | undefined>();
  const [token, setToken] = useState<string>();

  const authorization = async data => {
    const { login, password } = data;
    const user = { login, password };
    console.log('auth');
    setIsLoading(true);
    const response = await logIn(user);
    if (response.status === 200) {
      setToken(response.data);
      console.log(response.data);
      setTimeout(() => setIsSuccess(true), 1000);
    } else {
      console.log(response.status + ' ' + response.message);
      setTimeout(() => setIsSuccess(false), 1000);
    }
  };

  if (isSuccess) {
    console.log(token);
    setTimeout(() => navigate('/'), 1000);
    return (
      <>
        <Header></Header>
        <h1>Авторизация</h1>
        <div className={styles.successPage}>Авторизация прошла успешно!</div>
        <Footer></Footer>
      </>
    );
  }

  if (isSuccess === false) {
    setTimeout(() => navigate('/'), 2000);
    return (
      <>
        <Header></Header>
        <h1>Авторизация</h1>
        <div className={styles.successPage}>Что-то пошло не так. Попробуйте еще раз позже!</div>
        <Footer></Footer>
      </>
    );
  }

  return (
    <>
      <Header></Header>
      <h1>Авторизация</h1>
      <AuthorizationForm
        formElements={AUTHORIZATION_FORM_ELEMENTS}
        submitButtonLabel="Войти"
        submitButton={authorization}
      />
      <div className={styles.registrationButtonContainer} onClick={() => navigate('/registration')}>
        <p className={styles.registrationButton}>Еще нет аккаунта?</p>
      </div>
      {isLoading && (
        <p style={{ textAlign: 'center', margin: '10px 0px' }}>Данные отправляются на сервер...</p>
      )}
      <Footer></Footer>
    </>
  );
};
