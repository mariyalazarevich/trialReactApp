import { Footer } from '@components/footer/Footer';
import styles from './analytics.module.css';
import { UserContext } from 'src/contexts/userContext';
import { Header } from '@components/header/Header';
import { useNavigate } from 'react-router';
import { useEffect, useMemo } from 'react';
import { IOrder } from 'src/interfaces/orderInterface';
import { getAllUsers } from 'src/features/users/getUsers';
import { getAllOrders } from 'src/features/orders/getOrders';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from 'src/app/store';
import { format } from 'date-fns';
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { EStatus as eStatus } from 'src/enumerations/statusEnumeration';

const getBestTimeData = (allOrders: IOrder[]) => {
  const orderTimes = allOrders.map(order => format(order.dateTime, 'HH:mm'));
  const times = ['09:00', '12:00', '15:00', '18:00'];
  return times.map(time => {
    return { time: time, amount: orderTimes.filter(orderTime => orderTime === time).length };
  });
};

const getOrdersStatuses = (allOrders: IOrder[]) => {
  const orderStatuses = allOrders.map(order => order.status);
  const statuses = ['waiting', 'cancelled', 'accepted'];
  return statuses.map(status => {
    return {
      status: status,
      amount: orderStatuses.filter(orderStatus => orderStatus === status).length,
    };
  });
};

const getMonthesProfit = (allOrders: IOrder[]) => {
  const currentMonth = new Date(Date.now()).getMonth();
  const months: number[] = [];
  for (let i = 0; i < currentMonth; i++) {
    months.push(i);
  }
  return months.map(month => {
    return {
      month: format(new Date(2026, month, 1), 'MMM'),
      profit:
        allOrders.filter(order => {
          return new Date(order.dateTime).getMonth() === month && order.status === 'accepted';
        }).length * 200,
    };
  });
};

export const Analytics = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const allUsersError = useSelector((state: RootState) => state.allUsers.error);
  const usersStatus = useSelector((state: RootState) => state.allUsers.status);

  const allOrders = useSelector((state: RootState) => state.allOrders.orders);
  const allOrdersError = useSelector((state: RootState) => state.allOrders.error);
  const ordersStatus = useSelector((state: RootState) => state.allOrders.status);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllOrders());
    if (allOrdersError || allUsersError) {
      console.log(allOrdersError, allUsersError);
    }
  }, [dispatch, allOrdersError, allUsersError]);

  const bestTimeData = useMemo(() => getBestTimeData(allOrders), [allOrders]);
  const ordersStatusesData = useMemo(() => getOrdersStatuses(allOrders), [allOrders]);
  const monthesProfitData = useMemo(() => getMonthesProfit(allOrders), [allOrders]);

  return (
    <>
      <UserContext.Consumer>{value => <Header {...value} />}</UserContext.Consumer>
      <div className={styles.categoryButtons}>
        <button className={styles.toBookButton} onClick={() => navigate('/admin/task')}>
          Главная
        </button>
        <button className={styles.toBookButton} onClick={() => navigate('/admin/orders')}>
          Заказы
        </button>
        <button className={styles.toBookButton} onClick={() => navigate('/admin/clients')}>
          Клиенты
        </button>
        <button className={`${styles.toBookButton} ${styles.currentBookButton}`} disabled>
          Аналитика
        </button>
      </div>

      {ordersStatus === eStatus.error || usersStatus === eStatus.error ? (
        <div className={styles.successPage}>
          Что-то пошло не так. Попробуйте еще раз позже! {allOrdersError ?? allUsersError}
        </div>
      ) : (
        <div className={styles.charts}>
          <div className={styles.bestTimeBarChart}>
            <h3 className={styles.chartTitle}>Популярное время заказов</h3>
            <p className={styles.chartDescription}>Количество заказов по часам</p>

            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={bestTimeData}>
                <XAxis dataKey="time" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar
                  dataKey="amount"
                  name="Количество заказов"
                  fill="#fc9b09"
                  radius={[5, 5, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className={styles.monthProfitLineChart}>
            <h3 className={styles.chartTitle}>Прибыль по месяцам</h3>
            <p className={styles.chartDescription}>Доход от принятых заказов</p>

            <ResponsiveContainer width="100%" height="80%">
              <LineChart data={monthesProfitData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  dataKey="profit"
                  name="Прибыль"
                  stroke="#fc9b09"
                  strokeWidth={3}
                  dot={{ fill: '#fc9b09', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className={styles.statusOrdersPieChart}>
            <h3 className={styles.chartTitle}>Статусы заказов</h3>
            <p className={styles.chartDescription}>Распределение заказов по статусам</p>

            <ResponsiveContainer width="100%" height="80%">
              <PieChart>
                <Pie
                  data={ordersStatusesData}
                  dataKey="amount"
                  nameKey="status"
                  cx="50%"
                  cy="45%"
                  outerRadius={75}
                  label
                >
                  {ordersStatusesData.map((entry, index) => (
                    <Cell key={entry.status} fill={['#fc9b09', '#e76f51', '#65a982'][index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  formatter={value =>
                    value === 'waiting' ? 'Ожидают' : value === 'cancelled' ? 'Отменены' : 'Приняты'
                  }
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
      <Footer></Footer>
    </>
  );
};
