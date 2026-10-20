import { UserComponent } from '@components/userComponent/UserComponent';
import styles from './header.module.css';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { type RootState } from 'src/app/store';

export const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.authorizedUser.user);
  const isAuthorizedUser = useSelector((state: RootState) => state.authorizedUser.isAuthorized);

  return (
    <header>
      <div className={styles.helyflyLogo} onClick={() => navigate('/')}>
        <img src="/HELYFLY.png" alt="logo" />
      </div>

      <p className={styles.tel}>Телефон:</p>
      <p className={styles.telNumber}>8(800)-123-12-12</p>

      {!isAuthorizedUser ? (
        <div className={styles.authContainer} onClick={() => navigate('/authorization')}>
          <UserComponent />
          <p className={styles.authButton}>Войти</p>
        </div>
      ) : user.login === 'admin' ? (
        <div className={styles.authContainer} onClick={() => navigate('/admin/tasks')}>
          <UserComponent />
          <p className={styles.authButton}>Администратор</p>
        </div>
      ) : (
        <div className={styles.authContainer} onClick={() => navigate('/basket')}>
          <UserComponent />
          <p className={styles.authButton}>Корзина</p>
        </div>
      )}
    </header>
  );
};
