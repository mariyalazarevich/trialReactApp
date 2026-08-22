import styles from './map.module.css';

export const Map = () => {
  return (
    <section className={styles.mapSection}>
      <div className={styles.map}>
        <div className={styles.locationDescription}>
          <div className={styles.descriptionElements}>
            <img src="1.svg" alt="number1" className={styles.number1} />
            <div>
              <h2 className={styles.whereQuestion}>Где встречаемся?</h2>
              <p className={styles.where}>Москва</p>
            </div>
          </div>
          <div className={styles.descriptionElements}>
            <img src="2.svg" alt="number2" className={styles.number2} />
            <div>
              <h2 className={styles.timeQuestion}>Время съемки</h2>
              <p className={styles.time}>3 часа</p>
            </div>
          </div>
          <div className={styles.descriptionElements}>
            <img src="3.svg" alt="number3" className={styles.number3} />
            <div>
              <h2 className={styles.freePlaceQuestion}>Мест осталось:</h2>
              <p className={styles.freePlace}>2 места</p>
            </div>
          </div>
          <div className={styles.descriptionElements}>
            <img src="org_image.png" alt="org_image" className={styles.photoElement} />
            <div>
              <h2 className={styles.name}>Мария Иванова</h2>
              <p className={styles.job}>Фотограф</p>
              <button className={styles.extendInfo}>Показать больше информации</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
