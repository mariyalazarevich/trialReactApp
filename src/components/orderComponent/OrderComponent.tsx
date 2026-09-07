import { OrderForm } from '@components/orderForm/OrderForm';
import styles from './orderComponent.module.css';

export const OrderComponent = (props: { isOpen: boolean; onClose: () => void }) => {
  const { isOpen, onClose } = props;

  if (!isOpen) return null;
  return (
    <div className={styles.container}>
      <div className={styles.orderComponent}>
        <button className={styles.closeButton} onClick={onClose}></button>
        <h1>Бронирование</h1>
        <OrderForm />
      </div>
    </div>
  );
};
