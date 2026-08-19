import styles from './header.module.css';

export const Header = () => {
  return (
    <header>
      <div className={styles.helyflyTitle}>
        <img src="/HELYFLY.png"></img>
      </div>
      <div className={styles.tel}>Телефон:</div>
      <h4 className={styles.telNumber}>8(800)-123-12-12</h4>
    </header>
  );
};
