import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { IUserContext, UserContext } from 'src/contexts/userContext';
import { getOrdersByUserID } from 'src/store/api/orderApiFunctions';
import { IOrder } from 'src/interfaces/orderInterface';
import styles from './basket.module.css';

export const Basket: React.FC<IUserContext> = ({ user, isAuthorizedUser }) => {
  const navigate = useNavigate();

  const [userOrders, setUserOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    if (!isAuthorizedUser) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [isAuthorizedUser, navigate]);

  useEffect(() => {
    if (!isAuthorizedUser) {
      return;
    }
    const getOrders = async () => {
      try {
        const response = await getOrdersByUserID(user._id);
        setUserOrders(response.data);
      } catch (error) {
        console.error('Failed to get user orders:', error);
      }
    };
    getOrders();
  }, [isAuthorizedUser, user._id]);

  if (!isAuthorizedUser) {
    return (
      <>
        <UserContext.Consumer>{value => <Header {...value} />}</UserContext.Consumer>
        <div className={styles.basket}>
          <p className={styles.unauthorized}>Необходимо авторизоваться. Перенаправление...</p>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <UserContext.Consumer>{value => <Header {...value} />}</UserContext.Consumer>
      <div className={styles.basket}>
        <h1 className={styles.title}>Мои заказы</h1>

        {!userOrders ? (
          <p className={styles.empty}>У вас пока нет заказов</p>
        ) : (
          <div className={styles.orders}>
            {userOrders.map(order => (
              <article className={styles.order} key={order._id}>
                <div className={styles.orderHeader}>
                  <h2 className={styles.orderTitle}>Заказ №{order._id}</h2>
                  <span className={styles.status}>{order.status}</span>
                </div>

                <div className={styles.orderInfo}>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Дата</span>
                    <span className={styles.value}>{order.date}</span>
                  </div>

                  <div className={styles.infoItem}>
                    <span className={styles.label}>Время</span>
                    <span className={styles.value}>{order.time}</span>
                  </div>

                  <div className={styles.infoItem}>
                    <span className={styles.label}>Имя</span>
                    <span className={styles.value}>{order.name}</span>
                  </div>

                  <div className={styles.infoItem}>
                    <span className={styles.label}>Фамилия</span>
                    <span className={styles.value}>{order.surname}</span>
                  </div>

                  <div className={styles.infoItem}>
                    <span className={styles.label}>Телефон</span>
                    <span className={styles.value}>{order.tel}</span>
                  </div>

                  <div className={styles.infoItem}>
                    <span className={styles.label}>Email</span>
                    <span className={styles.value}>{order.email}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
