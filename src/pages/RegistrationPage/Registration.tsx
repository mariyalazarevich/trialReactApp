import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';
import styles from './registration.module.css';
import { AuthorizationForm } from '@components/authorizationForm/AuthorizationForm';
import { useNavigate } from 'react-router';
import { createUser } from 'src/features/users/createUser';
import { UserContext } from 'src/contexts/userContext';
import { IAuthForm } from 'src/interfaces/authFromInterface';
import { RegisterOptions } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from 'src/app/store';
import { useEffect } from 'react';
import { EStatus as eStatus } from 'src/enumerations/statusEnumeration';

type FormElement = {
  label: string;
  placeholder: string;
  id: keyof IAuthForm;
  type: string;
  rules?: RegisterOptions<IAuthForm>;
};

const REGISTRATION_FORM_ELEMENTS: FormElement[] = [
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

  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.createUser.status);

  const registration = async (data: IAuthForm) => {
    const { name, surname, email, login, password } = data;
    const user = {
      name,
      surname,
      email,
      login,
      password,
    };
    if (user) {
      dispatch(createUser(user));
    }
  };

  useEffect(() => {
    if (status === eStatus.successfull) {
      setTimeout(() => navigate('/'), 1000);
    }
    if (status === eStatus.error) {
      setTimeout(() => navigate('/'), 2000);
    }
  }, [status]);

  return (
    <>
      <UserContext.Consumer>{value => <Header {...value} />}</UserContext.Consumer>
      <h1>Регистрация</h1>
      {status === eStatus.successfull ? (
        <div className={styles.successPage}>Регистрация прошла успешно!</div>
      ) : status === eStatus.error ? (
        <div className={styles.successPage}>Что-то пошло не так. Попробуйте еще раз позже!</div>
      ) : (
        <>
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
          {status === eStatus.loading && (
            <p style={{ textAlign: 'center', margin: '10px 0' }}>
              Данные отправляются на сервер...
            </p>
          )}
        </>
      )}
      <Footer></Footer>
    </>
  );
};
