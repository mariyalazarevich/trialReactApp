import { OrderForm } from '@components/orderForm/OrderForm';
import styles from './orderComponent.module.css';

export const OrderComponent = (props: { isOpen: boolean; onClose: () => void }) => {
  const { isOpen, onClose } = props;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;
  return (
    <div className={styles.container} onClick={handleOverlayClick}>
      <div className={styles.orderComponent}>
        <button className={styles.closeButton} onClick={onClose}></button>
        <h1>Бронирование</h1>
        <OrderForm />
      </div>
    </div>
  );
};
