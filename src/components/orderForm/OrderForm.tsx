import { useState } from 'react';
import styles from './orderForm.module.css';
import { useForm } from 'react-hook-form';
import { createOrder } from 'src/store/api/orderApiFunctions';

const FORM_ELEMENTS = [
  {
    label: 'Дата',
    placeholder: '01.01.2026',
    id: 'date',
    type: 'text',
    rules: { required: 'Это поле обязательно' },
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
    label: 'Телефон',
    placeholder: '8(029) 123-45-67',
    id: 'tel',
    type: 'tel',
    rules: {
      required: 'Это поле обязательно',
      pattern: { value: /^(\+375)(29|33|44|25)[0-9]{7}$/, message: 'Неверный формат данных' },
    },
  },
];

const today = new Date(Date.now());

export const OrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const submitForm = async data => {
    const { date, email, name, surname, tel } = data;
    const order = {
      date: new Date(date),
      time: 'string',
      email,
      name,
      surname,
      tel,
    };
    setIsLoading(true);
    const response = await createOrder(order);
    console.log(response);
    if (response === 200) {
      setTimeout(() => setIsLoading(false), 1000);
      setTimeout(() => setIsSuccess(true), 1000);
    }
  };

  if (isSuccess) {
    setTimeout(() => console.log('ekwjnrjnw'), 1000);
    return <div className={styles.successPage}>Спасибо за вашу заяку!</div>;
    //тут надо как-то перенести назад на MainPage
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} noValidate>
      {FORM_ELEMENTS.map((element, index) => (
        <div className={styles.formElement} key={index + element.label}>
          <label className={styles.label} htmlFor={element.id}>
            {element.label}
            <span>*</span>
          </label>
          <input
            {...register(element.id, element.rules)}
            type={element.type}
            className={styles.inputField}
            placeholder={element.placeholder}
            id={element.id}
          />
          {errors[element.id] && (
            <p className={styles.error}>{errors[element.id]?.message?.toString()}</p>
          )}
        </div>
      ))}

      <div className={styles.formElement}>
        <label className={styles.label}>
          Данные карты<span>*</span>
        </label>

        <div className={styles.cardNumber}>
          <input
            {...register('cardNumber', {
              required: 'Это поле обязательно',
              pattern: {
                value:
                  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})$/,
                message: 'Неверный формат данных',
              },
            })}
            id="cardNumber"
            type="number"
            className={styles.inputField}
            placeholder="Номер карты"
          />
          {errors.cardNumber && (
            <p className={styles.error}>{errors.cardNumber?.message?.toString()}</p>
          )}
        </div>

        <div className={styles.cardInfo}>
          <div className={styles.cardExpires}>
            <input
              {...register('cardExpires', {
                required: 'Это поле обязательно',
                validate: (value: string) => {
                  const expiresRegEx = /^(0[1-9]|1[0-2])\/?([0-9]{2}|[0-9]{4})$/;
                  if (!expiresRegEx.test(value)) {
                    return 'Неверный формат данных';
                  }
                  const [month, year] = value.split('/');
                  const isYearValid =
                    Number(year) >= today.getFullYear() && Number(year) <= today.getFullYear() + 5;
                  const isMonthValid = Number(month) >= 1 && Number(month) <= 12;
                  return (isMonthValid && isYearValid) || 'Неверный формат данных';
                },
              })}
              id="cardExpires"
              type="text"
              className={styles.inputField}
              placeholder="Срок действия"
            />

            {errors.cardExpires && (
              <p className={styles.error}>{errors.cardExpires.message?.toString()}</p>
            )}
          </div>

          <div className={styles.cardCVV}>
            <input
              {...register('cardCVV', {
                required: 'Это поле обязательно',
                pattern: { value: /^[0-9]{3}$/, message: 'Неверный формат данных' },
              })}
              id="cardCVV"
              type="text"
              className={styles.inputField}
              placeholder="CVV"
            />
            {errors.cardCVV && (
              <p className={styles.error}>{errors.cardCVV?.message?.toString()}</p>
            )}
          </div>
        </div>
      </div>

      <div className={styles.inputCheckbox}>
        <div className={styles.checkBox}>
          <input
            {...register('userAgreement', { required: 'Это поле обязательно' })}
            id="userAgreement"
            type="checkbox"
          />
          <label> Я согласен с пользовательским соглашением и публичной офертой</label>
        </div>

        {errors.userAgreement && (
          <p className={styles.error}>{errors.userAgreement.message?.toString()}</p>
        )}
      </div>

      <div className={styles.formButton}>
        <input type="submit" value="Забронировать" />
      </div>

      {isLoading && <div>Ваши данные отправляются на сервер</div>}
    </form>
  );
};
