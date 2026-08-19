import styles from './schedule.module.css';

export const Schedule = () => {
  return (
    <section className={styles.schedule}>
      <h2>Доступная съемка в ближайшее время:</h2>
      <table>
        <tbody>
          <tr>
            <th>
              <h4>
                Пятница, <span>14</span> сентября
              </h4>
              <button className={styles.calendarButton}></button>
            </th>
          </tr>
          <tr>
            <td>
              <div className={styles.tableMainInfo}>
                <h4 className={styles.photoshootTime}>15:00 - 18:00</h4>
                <span className={styles.photoshootPrice}>1500₽</span>
                <h4 className={styles.photoshootFreeSlots}>Осталось — 1 место</h4>
              </div>
              <button className={styles.chooseButton}>Выбрать</button>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.tableMainInfo}>
                <h4 className={styles.photoshootTime}>19:00 - 22:00</h4>
                <span className={styles.photoshootPrice}>1500₽</span>
                <h4 className={styles.photoshootFreeSlots}>Осталось — 1 место</h4>
              </div>
              <button className={styles.chooseButton}>Выбрать</button>
            </td>
          </tr>
          <tr>
            <td id={styles.tdSlogan}>
              <div className={styles.sloganContainer}>
                <div className={styles.reviewsSlogan}>
                  <div className={styles.reviewIcon}></div>
                  <h4 className={styles.slogan}>
                    Более <span>50</span> отзывов с оценкой
                  </h4>
                  <div className={styles.stars}>
                    <div className={styles.star}></div>
                    <div className={styles.star}></div>
                    <div className={styles.star}></div>
                    <div className={styles.star}></div>
                    <div className={styles.star}></div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
