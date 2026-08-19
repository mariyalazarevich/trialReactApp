import styles from './map.module.css';

export const Map = () => {
  return (
    <section className={styles.mapSection}>
      <div className={styles.map}>
        <div className={styles.locationDescription}>
          <div className={styles.descriptionElements}>
            <img src="1.svg" alt="" className={styles.number1} />
            <div>
              <h2 className={styles.whereQuestion}>Где встречаемся?</h2>
              <h4 className={styles.where}>Москва</h4>
            </div>
          </div>
          <div className={styles.descriptionElements}>
            <img src="2.svg" alt="" className={styles.number2} />
            <div>
              <h2 className={styles.timeQuestion}>Время съемки</h2>
              <h4 className={styles.time}>3 часа</h4>
            </div>
          </div>
          <div className={styles.descriptionElements}>
            <img src="3.svg" alt="" className={styles.number3} />
            <div>
              <h2 className={styles.freePlaceQuestion}>Мест осталось:</h2>
              <h4 className={styles.freePlace}>2 места</h4>
            </div>
          </div>
          <div className={styles.descriptionElements}>
            <img src="org_image.png" alt="" className={styles.photoElement} />
            <div>
              <h2 className={styles.name}>Мария Иванова</h2>
              <h4 className={styles.job}>Фотограф</h4>
              <button className={styles.extendInfo}>Показать больше информации</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
