import styles from './orderComponent.module.css';

const FORM_ELEMENTS = [
  {
    label: 'Дата',
    placeholder: '01.01.2026',
    type: 'text',
  },
  {
    label: 'Email',
    placeholder: 'email@gmail.com',
    type: 'email',
  },
  {
    label: 'Имя',
    placeholder: 'Иван',
    type: 'text',
  },
  {
    label: 'Фамилия',
    placeholder: 'Иванов',
    type: 'text',
  },
  {
    label: 'Телефон',
    placeholder: '8(029) 123-45-67',
    type: 'tel',
  },
];

export const OrderComponent = (props: { isOpen: boolean; onClose: () => void }) => {
  const { isOpen, onClose } = props;

  if (!isOpen) return null;
  return (
    <div className={styles.container}>
      <div className={styles.orderComponent}>
        <button className={styles.closeButton} onClick={onClose}></button>
        <h1>Бронирование</h1>
        <form>
          {FORM_ELEMENTS.map((element, index) => (
            <div className={styles.formElement} key={index + element.label}>
              <label className={styles.label}>
                {element.label}
                <span>*</span>
              </label>
              <input
                type={element.type}
                className={styles.inputField}
                placeholder={element.placeholder}
                required
              />
            </div>
          ))}
          <div className={styles.formElement}>
            <label className={styles.label}>
              Данные карты<span>*</span>
            </label>
            <input type="number" className={styles.inputField} placeholder="Номер карты" required />
            <div className={styles.cardInfo}>
              <input
                type="number"
                className={styles.inputField}
                placeholder="Срок действия"
                required
              />
              <input type="text" className={styles.inputField} placeholder="CVV" required />
            </div>
          </div>

          <div className={styles.checkBox}>
            <input type="checkbox" required />
            <label> Я согласен с пользовательским соглашением и публичной офертой</label>
          </div>

          <div className={styles.formButton}>
            <input type="submit" value="Забронировать" />
          </div>
        </form>
      </div>
    </div>
  );
};
