import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';
import styles from './authorization.module.css';
import { AuthorizationForm } from '@components/authorizationForm/AuthorizationForm';
import { useNavigate } from 'react-router';

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

  const authorization = data => {
    const { login, password } = data;
    const user = { login, password };
    console.log('auth');
    setTimeout(() => navigate('/'), 1000);
  };

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
      <Footer></Footer>
    </>
  );
};
