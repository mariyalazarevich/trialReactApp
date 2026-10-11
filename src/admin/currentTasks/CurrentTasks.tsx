import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';
import { UserContext } from 'src/contexts/userContext';
import styles from './currentTasks.module.css';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { getAllOrders } from 'src/store/api/orderApiFunctions';
import { IOrder } from 'src/interfaces/orderInterface';
import { format } from 'date-fns';

const getAllFutureOrders = (allOrders: IOrder[]) => {
  const today = new Date(Date.now());
  allOrders.sort((a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime());
  return allOrders.filter(order => new Date(order.dateTime) > today);
};

const getWaitingOrders = (allOrders: IOrder[]) => {
  const today = new Date(Date.now());
  return allOrders.filter(order => order.status === 'waiting' && new Date(order.dateTime) > today);
};

const getThisMonthOrders = (allOrders: IOrder[]) => {
  const today = new Date();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  return allOrders.filter(order => {
    const orderDate = new Date(order.dateTime);
    console.log(orderDate.getMonth());
    return orderDate.getMonth() === todayMonth && orderDate.getFullYear() === todayYear;
  });
};

const getTodayOrders = (allOrders: IOrder[]) => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  return allOrders.filter(order => {
    const orderDate = new Date(order.dateTime);
    return orderDate > start && orderDate < end;
  });
};

export const CurrentTasks = () => {
  const navigate = useNavigate();

  const [allOrders, setAllOrders] = useState<IOrder[]>([]);
  //const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await getAllOrders();
        setAllOrders(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Failed to get user orders:', error);
      }
    };
    getOrders();
  }, []);

  const todayOrders = getTodayOrders(allOrders);
  const allFutureOrders = getAllFutureOrders(allOrders);
  const thisMonthOrders = getThisMonthOrders(allOrders);
  const waitingOrders = getWaitingOrders(allOrders);
  const closestOrders = getAllFutureOrders(allOrders).slice(0, 7);

  return (
    <>
      <UserContext.Consumer>{value => <Header {...value} />}</UserContext.Consumer>
      <div className={styles.categoryButtons}>
        <button className={`${styles.toBookButton} ${styles.currentBookButton}`} disabled>
          Главная
        </button>

        <button className={styles.toBookButton} onClick={() => navigate('/admin/orders')}>
          Заказы
        </button>
        <button className={styles.toBookButton} onClick={() => navigate('/admin/clients')}>
          Клиенты
        </button>
        <button className={styles.toBookButton} onClick={() => navigate('/admin/analytics')}>
          Аналитика
        </button>
      </div>

      <div className={styles.mainInfoTable}>
        <div className={styles.infoCard}>
          <p className={styles.title}>Все будущие заказы</p>
          <p className={styles.value}>{allFutureOrders.length}</p>
        </div>

        <div className={styles.infoCard}>
          <p className={styles.title}>В этом месяце</p>
          <p className={styles.value}>{thisMonthOrders.length}</p>
        </div>

        <div className={styles.infoCard}>
          <p className={styles.title}>Заказы на сегодня</p>
          <p className={styles.value}>{todayOrders.length}</p>
        </div>

        <div className={styles.infoCard}>
          <p className={styles.title}>Ожидающие подтверждения</p>
          <p className={styles.value}>{waitingOrders.length}</p>
        </div>
      </div>

      <div className={styles.ordersTable}>
        <p className={styles.tableTitle}>Ближайшие заказы</p>

        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <div>Дата</div>
            <div>Время</div>
            <div>Имя</div>
            <div>Телефон</div>
            <div>Статус</div>
          </div>

          {closestOrders.map(order => {
            const currentOrderDateTime = new Date(order.dateTime);
            return (
              <div className={styles.tableRow} key={order._id}>
                <div>{format(currentOrderDateTime, 'dd.MM.yyyy')}</div>
                <div>{format(currentOrderDateTime, 'HH:mm')}</div>
                <div>
                  {order.name} {order.surname}
                </div>
                <div>{order.tel}</div>
                <div>
                  <span className={`${styles.status} ${styles[order.status]}`}>{order.status}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
