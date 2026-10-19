import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';
import { UserContext } from 'src/contexts/userContext';
import styles from './orders.module.css';
import { useNavigate } from 'react-router';
import { IOrder } from 'src/interfaces/orderInterface';
import { useEffect, useMemo, useState } from 'react';
import { format } from 'date-fns';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/confetti.css';
import { Russian } from 'flatpickr/dist/l10n/ru';
import { getAllOrders } from 'src/features/orders/getOrders';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from 'src/app/store';
import { EStatus as eStatus } from 'src/enumerations/statusEnumeration';

type Filters = {
  sinceDate: Date | undefined;
  toDate: Date | undefined;
  status: string;
};

export const getAllFutureOrders = (allOrders: IOrder[]) => {
  const today = new Date(Date.now());
  [...allOrders].sort((a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime());
  return [...allOrders].filter(order => new Date(order.dateTime) > today);
};

export const Orders = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const allOrders = useSelector((state: RootState) => state.allOrders.orders);
  const allOrdersError = useSelector((state: RootState) => state.allOrders.error);
  const status = useSelector((state: RootState) => state.logIn.status);

  const [sortBy, setSortBy] = useState<'date' | 'name'>('date');
  const [filters, setFilters] = useState<Filters>({
    sinceDate: undefined,
    toDate: undefined,
    status: 'all',
  });

  useEffect(() => {
    dispatch(getAllOrders());
    if (allOrdersError) {
      console.log(allOrdersError);
    }
  }, [allOrdersError, dispatch]);

  const showedOrders = useMemo(() => {
    const today = new Date();
    return [...allOrders]
      .filter(order => {
        const orderDate = new Date(order.dateTime);
        if (orderDate <= today) {
          return false;
        }
        if (filters.sinceDate && orderDate < filters.sinceDate) {
          return false;
        }
        if (filters.toDate && orderDate > filters.toDate) {
          return false;
        }
        if (filters.status !== 'all' && order.status !== filters.status) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'name') {
          return `${a.name} ${a.surname}`.localeCompare(`${b.name} ${b.surname}`, 'ru');
        }

        return new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime();
      });
  }, [allOrders, filters, sortBy]);

  const sortByDateAndName = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value as 'date' | 'name');
  };

  const filterByStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setFilters({ ...filters, status: selectedValue });
  };

  const filterBySinceDate = (date: Date[]) => {
    const start = new Date(date[0]);
    start.setHours(0, 0, 0, 0);
    setFilters({ ...filters, sinceDate: new Date(start) });
  };

  const filterByToDate = (date: Date[]) => {
    const end = new Date(date[0]);
    end.setHours(23, 59, 59, 999);
    setFilters({ ...filters, toDate: new Date(end) });
  };

  return (
    <>
      <UserContext.Consumer>{value => <Header {...value} />}</UserContext.Consumer>

      <div className={styles.categoryButtons}>
        <button className={styles.toBookButton} onClick={() => navigate('/admin/tasks')}>
          Главная
        </button>

        <button className={`${styles.toBookButton} ${styles.currentBookButton}`} disabled>
          Заказы
        </button>

        <button className={styles.toBookButton} onClick={() => navigate('/admin/clients')}>
          Клиенты
        </button>

        <button className={styles.toBookButton} onClick={() => navigate('/admin/analytics')}>
          Аналитика
        </button>
      </div>

      {status === eStatus.error ? (
        <div className={styles.successPage}>
          Что-то пошло не так. Попробуйте еще раз позже! {allOrdersError}
        </div>
      ) : (
        <div className={styles.ordersTable}>
          <p className={styles.tableTitle}>Заказы</p>

          <div className={styles.filters}>
            <div className={styles.filterGroup}>
              <label htmlFor="dateFilter">Дата</label>

              <Flatpickr
                value={filters.sinceDate ?? ''}
                onChange={date => filterBySinceDate(date)}
                options={{
                  dateFormat: 'd.m.Y',
                  minDate: 'today',
                  locale: Russian,
                }}
                className={styles.inputField}
                placeholder="C:"
              />
              <Flatpickr
                value={filters.toDate ?? ''}
                onChange={date => filterByToDate(date)}
                options={{
                  dateFormat: 'd.m.Y',
                  minDate: 'today',
                  locale: Russian,
                }}
                className={styles.inputField}
                placeholder="По:"
              />
            </div>

            <div className={styles.filterGroup}>
              <label htmlFor="statusFilter">Статус</label>

              <select id="statusFilter" onChange={filterByStatus} value={filters.status}>
                <option value="all">Все статусы</option>
                <option value="accepted">Подтверждено</option>
                <option value="waiting">Ожидает подтверждения</option>
                <option value="cancelled">Отменен</option>
              </select>
            </div>

            <div className={styles.filterGroup}>
              <label htmlFor="sortBy">Сортировка</label>

              <select id="sortBy" value={sortBy} onChange={sortByDateAndName}>
                <option value="date">По возрастанию даты</option>
                <option value="name">По алфавиту по имени</option>
              </select>
            </div>

            <button
              className={styles.resetButton}
              onClick={() => {
                setFilters({
                  sinceDate: undefined,
                  toDate: undefined,
                  status: 'all',
                });
                setSortBy('date');
              }}
            >
              Сбросить
            </button>
          </div>

          <div className={styles.table}>
            <div className={styles.tableHeader}>
              <div>Клиент</div>
              <div>Дата</div>
              <div>Время</div>
              <div>Телефон</div>
              <div>Статус</div>
              <div>Действие</div>
            </div>

            {showedOrders.length === 0 ? (
              <p className={styles.message}>Заказов по вашему запросу не найдено</p>
            ) : (
              showedOrders.map(order => {
                const currentOrderDateTime = new Date(order.dateTime);
                return (
                  <div className={styles.tableRow} key={order._id}>
                    <div>
                      {order.name} {order.surname}
                    </div>
                    <div>{format(currentOrderDateTime, 'dd.MM.yyyy')}</div>
                    <div>{format(currentOrderDateTime, 'HH:mm')}</div>
                    <div>{order.tel}</div>
                    <div>
                      <span className={`${styles.status} ${styles[order.status]}`}>
                        {order.status}
                      </span>
                    </div>
                    <div>
                      <button className={styles.resetButton} style={{ width: '80%' }}>
                        Редактировать
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};
