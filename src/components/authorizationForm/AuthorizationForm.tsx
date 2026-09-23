import { RegisterOptions, useForm } from 'react-hook-form';
import styles from './authorizationForm.module.css';

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
  submitButton: () => void;
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

  return (
    <form onSubmit={handleSubmit(submitButton)} noValidate>
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
        </div>
      ))}

      <div className={styles.formButton}>
        <input type="submit" value={submitButtonLabel} />
      </div>
    </form>
  );
};
