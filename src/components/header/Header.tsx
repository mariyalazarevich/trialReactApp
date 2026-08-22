import styles from './header.module.css';

export const Header = () => {
  return (
    <header>
      <div className={styles.helyflyLogo}>
        <img src="/HELYFLY.png" alt="logo"></img>
      </div>
      <p className={styles.tel}>Телефон:</p>
      <p className={styles.telNumber}>8(800)-123-12-12</p>
    </header>
  );
};
