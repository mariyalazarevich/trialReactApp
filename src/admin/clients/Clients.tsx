import { UserContext } from 'src/contexts/userContext';
import styles from './clients.module.css';
import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';
import { useNavigate } from 'react-router';
import { useState, useEffect, useMemo } from 'react';
import { getAllUsers } from 'src/store/api/userApiFunctions';
import { IUser } from 'src/interfaces/userInterface';
import { IOrder } from 'src/interfaces/orderInterface';
import { getAllOrders } from 'src/store/api/orderApiFunctions';

type SortField = 'surname' | 'name' | 'login' | 'orders';

type Filters = {
  active: string;
};

const getUsersOrders = (user: IUser, allOrders: IOrder[]) => {
  return allOrders.filter(order => order.userID === user._id);
};

export const Clients = () => {
  const navigate = useNavigate();

  const [allUsers, setAllUsers] = useState<IUser[]>([]);
  const [allOrders, setAllOrders] = useState<IOrder[]>([]);

  const [sortBy, setSortBy] = useState<SortField>('surname');

  const [filters, setFilters] = useState<Filters>({
    active: 'all',
  });

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await getAllUsers();
        setAllUsers(response.data);
      } catch (error) {
        console.error('Failed to get users:', error);
      }
    };

    const getOrders = async () => {
      try {
        const response = await getAllOrders();
        setAllOrders(response.data);
      } catch (error) {
        console.error('Failed to get orders:', error);
      }
    };

    getUsers();
    getOrders();
  }, []);

  const showedUsers = useMemo(() => {
    return [...allUsers]
      .filter(user => {
        const ordersCount = getUsersOrders(user, allOrders).length;

        if (filters.active === 'non-active' && ordersCount !== 0) {
          return false;
        }

        if (filters.active === 'active' && ordersCount === 0) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'orders') {
          return getUsersOrders(b, allOrders).length - getUsersOrders(a, allOrders).length;
        }

        return a[sortBy].localeCompare(b[sortBy], 'ru');
      });
  }, [allUsers, allOrders, filters, sortBy]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value as SortField);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({
      active: event.target.value,
    });
  };

  return (
    <>
      <UserContext.Consumer>{value => <Header {...value} />}</UserContext.Consumer>

      <div className={styles.categoryButtons}>
        <button className={styles.toBookButton} onClick={() => navigate('/admin/tasks')}>
          Главная
        </button>

        <button className={styles.toBookButton} onClick={() => navigate('/admin/orders')}>
          Заказы
        </button>

        <button className={`${styles.toBookButton} ${styles.currentBookButton}`} disabled>
          Клиенты
        </button>

        <button className={styles.toBookButton} onClick={() => navigate('/admin/analytics')}>
          Аналитика
        </button>
      </div>

      <div className={styles.ordersTable}>
        <p className={styles.tableTitle}>Клиенты</p>

        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <label htmlFor="activeFilter">Активность</label>

            <select id="activeFilter" value={filters.active} onChange={handleFilterChange}>
              <option value="all">Все</option>
              <option value="non-active">Неактивные</option>
              <option value="active">Активные</option>
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label htmlFor="sortBy">Сортировка</label>

            <select id="sortBy" value={sortBy} onChange={handleSortChange}>
              <option value="surname">По алфавиту по фамилии</option>
              <option value="name">По алфавиту по имени</option>
              <option value="login">По алфавиту по логину</option>
              <option value="orders">По количеству заказов</option>
            </select>
          </div>

          <button
            className={styles.resetButton}
            onClick={() => {
              setFilters({
                active: 'all',
              });
              setSortBy('surname');
            }}
          >
            Сбросить
          </button>
        </div>

        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <div>Имя</div>
            <div>Фамилия</div>
            <div>Логин</div>
            <div>Email</div>
            <div>Количество заказов</div>
            <div>Действие</div>
          </div>

          {showedUsers.length === 0 ? (
            <p className={styles.message}>Клиенты по вашему запросу не найдены</p>
          ) : (
            showedUsers.map(user => (
              <div className={styles.tableRow} key={user._id}>
                <div>{user.name}</div>
                <div>{user.surname}</div>
                <div>{user.login}</div>
                <div>{user.email}</div>
                <div>{getUsersOrders(user, allOrders).length}</div>
                <div>
                  <button className={styles.resetButton} style={{ width: '60%' }}>
                    Редактировать
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};
