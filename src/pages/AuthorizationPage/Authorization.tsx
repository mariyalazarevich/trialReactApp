import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';
import styles from './authorization.module.css';
import { AuthorizationForm } from '@components/authorizationForm/AuthorizationForm';
import { useNavigate } from 'react-router';
import { IUserContext, UserContext } from 'src/contexts/userContext';
import { RegisterOptions } from 'react-hook-form';
import { IAuthForm } from 'src/interfaces/authFromInterface';
import { logIn } from 'src/features/users/logIn';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from 'src/app/store';
import { useEffect } from 'react';

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

  const dispatch = useDispatch<AppDispatch>();

  const authorizedUser = useSelector((state: RootState) => state.logIn.user);
  const userError = useSelector((state: RootState) => state.logIn.error);
  const status = useSelector((state: RootState) => state.logIn.status);

  console.log(status);

  const authorization = async (data: IAuthForm) => {
    const { login, password } = data;
    const user = { login, password };
    dispatch(logIn(user));
    console.log(status);
  };

  useEffect(() => {
    if (status === 'succeeded') {
      setUser(authorizedUser.login, authorizedUser.token, authorizedUser._id);

      setTimeout(() => {
        navigate('/', { replace: true });
      }, 2000);
    }

    if (status === 'failed') {
      console.log(userError);
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 2000);
    }
  }, [status]);

  return (
    <>
      <UserContext.Consumer>{value => <Header {...value} />}</UserContext.Consumer>

      <h1>Авторизация</h1>

      {status === 'succeeded' ? (
        <div className={styles.successPage}>Авторизация прошла успешно!</div>
      ) : status === 'failed' ? (
        <div className={styles.successPage}>Что-то пошло не так. Попробуйте еще раз позже!</div>
      ) : (
        <>
          <AuthorizationForm
            formElements={AUTHORIZATION_FORM_ELEMENTS}
            submitButtonLabel="Войти"
            submitButton={authorization}
          />

          <div
            className={styles.registrationButtonContainer}
            onClick={() => navigate('/registration')}
          >
            <p className={styles.registrationButton}>Еще нет аккаунта?</p>
          </div>

          {status === 'loading' && (
            <p style={{ textAlign: 'center', margin: '10px 0' }}>
              Данные отправляются на сервер...
            </p>
          )}
        </>
      )}

      <Footer />
    </>
  );
};
