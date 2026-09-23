import { UserComponent } from '@components/userComponent/UserComponent';
import styles from './header.module.css';
import { useNavigate } from 'react-router';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className={styles.helyflyLogo} onClick={() => navigate('/')}>
        <img src="/HELYFLY.png" alt="logo"></img>
      </div>
      <p className={styles.tel}>Телефон:</p>
      <p className={styles.telNumber}>8(800)-123-12-12</p>
      <div className={styles.authContainer} onClick={() => navigate('/authorization')}>
        <UserComponent />
        <p className={styles.authButton}>Войти</p>
      </div>
    </header>
  );
};
