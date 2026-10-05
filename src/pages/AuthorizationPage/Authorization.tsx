import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';
import styles from './authorization.module.css';
import { AuthorizationForm } from '@components/authorizationForm/AuthorizationForm';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { logIn } from 'src/store/api/userApiFunctions';
import { IUserContext, UserContext } from 'src/contexts/userContext';
import { RegisterOptions } from 'react-hook-form';
import { IAuthForm } from 'src/interfaces/authFromInterface';

type FormElement = {
  label: string;
  placeholder: string;
  id: keyof IAuthForm;
  type: string;
  rules?: RegisterOptions<IAuthForm>;
};

const AUTHORIZATION_FORM_ELEMENTS: FormElement[] = [
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

export const Authorization: React.FC<IUserContext> = ({ setUser }) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [token, setToken] = useState<string>();

  const authorization = async (data: IAuthForm) => {
    const { login, password } = data;
    const user = { login, password };
    console.log('auth');
    setIsLoading(true);
    const response = await logIn(user);
    if (response.status === 200) {
      const authorizedUser = response.data;
      setToken(authorizedUser.token);
      setUser(authorizedUser.login, authorizedUser.token, authorizedUser._id);
      console.log(response.data);
      setTimeout(() => setIsSuccess(true), 1000);
    } else {
      console.log(response.status + ' ' + response.message);
      setIsSuccess(false);
      setTimeout(() => setIsError(true), 1000);
    }
  };

  if (isSuccess) {
    console.log(token);
    setTimeout(() => navigate('/'), 1000);
    return (
      <>
        <UserContext.Consumer>{value => <Header {...value} />}</UserContext.Consumer>
        <h1>Авторизация</h1>
        <div className={styles.successPage}>Авторизация прошла успешно!</div>
        <Footer></Footer>
      </>
    );
  }

  if (isError) {
    setTimeout(() => navigate('/'), 2000);
    return (
      <>
        <UserContext.Consumer>{value => <Header {...value} />}</UserContext.Consumer>
        <h1>Авторизация</h1>
        <div className={styles.successPage}>Что-то пошло не так. Попробуйте еще раз позже!</div>
        <Footer></Footer>
      </>
    );
  }

  return (
    <>
      <UserContext.Consumer>{value => <Header {...value} />}</UserContext.Consumer>
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
