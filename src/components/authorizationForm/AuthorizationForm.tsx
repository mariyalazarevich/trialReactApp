import { RegisterOptions, useForm } from 'react-hook-form';
import styles from './authorizationForm.module.css';
import { useState } from 'react';

type FormElement = {
  label: string;
  placeholder: string;
  id: string;
  type: string;
  rules?: RegisterOptions;
};

type AuthorizationFormProps = {
  formElements: FormElement[];
  submitButtonLabel: string;
  submitButton: (data) => void;
};

export const AuthorizationForm = ({
  formElements,
  submitButtonLabel,
  submitButton,
}: AuthorizationFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isPasswordsEqual, setIsPasswordEqual] = useState<boolean | undefined>();

  const submitForm = data => {
    const { password, repeatPassword } = data;
    if (password && repeatPassword && password !== repeatPassword) {
      setIsPasswordEqual(false);
      return;
    }
    setIsPasswordEqual(true);
    submitButton(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} noValidate>
      {formElements.map((element, index) => (
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
          {(element.id === 'password' || element.id === 'repeatPassword') &&
            isPasswordsEqual === false && <p className={styles.error}>Пароли должны совпадать</p>}
        </div>
      ))}

      <div className={styles.formButton}>
        <input type="submit" value={submitButtonLabel} />
      </div>
    </form>
  );
};
