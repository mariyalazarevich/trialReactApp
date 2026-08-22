import styles from './banner.module.css';

export const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.mainPhoto}>
        <img
          src="76c52309bb21e32603dd62efce43d97055f0ddc1.jpg"
          alt=""
          className={styles.backgroundImage}
        />
        <h1 className={styles.mainSlogan}>
          Эксклюзивная <span>фотосессия</span> при полете на вертолете
        </h1>
        <div className={styles.rectangle}>
          <div className={styles.rectangleInfo}>
            <h4>Стоимость: </h4>
            <h2>1500₽</h2>
          </div>
          <img src="percent.png" alt="percent" className={styles.rectangleImage} />
        </div>
        <button className={styles.toBookButton}>Забронировать место</button>
      </div>
    </section>
  );
};
