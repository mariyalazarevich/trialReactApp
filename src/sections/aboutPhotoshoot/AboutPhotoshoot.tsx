import styles from './aboutPhotoshoot.module.css';

export const AboutPhotoshoot = () => {
  return (
    <section className={styles.aboutPhotoshoot}>
      <div className={styles.aboutContainer}>
        <h2>Фотоссесия в вертолете</h2>
        <h4 id={styles.aboutPhotoshoot}>
          Полет на вертолете это прекрасная возможность получить новые ощущения! А наш замечательный
          фотограф запечатлит лучшие моменты
        </h4>
        <ul className={styles.photoshootInfo}>
          <li className={styles.photoshootDuration}>
            <img src="time.svg" alt="" />
            <h4>3 часа съемки</h4>
          </li>
          <li className={styles.photoQuantity}>
            <img src="camera.svg" alt="" />
            <h4>Более 50 фотографий</h4>
          </li>
          <li className={styles.photoshootLocation}>
            <img src="location.svg" alt="" />
            <h4>Москва</h4>
          </li>
          <li className={styles.photoshootQuestions}>
            <img src="messages.svg" alt="" />
            <h4>Готовы ответить на любые вопросы</h4>
          </li>
        </ul>
        <div className={styles.sloganContainer}>
          <div className={styles.line}></div>
          <div className={styles.reviewsSlogan}>
            <img src="cup.svg" alt="" className={styles.reviewIcon} />
            <p className={styles.slogan}>
              Более <span>50</span> отзывов с оценкой
            </p>
            <div className={styles.stars}>
              <img src="star.svg" alt="" className={styles.star} />
              <img src="star.svg" alt="" className={styles.star} />
              <img src="star.svg" alt="" className={styles.star} />
              <img src="star.svg" alt="" className={styles.star} />
              <img src="star.svg" alt="" className={styles.star} />
            </div>
          </div>
          <div className={styles.line}></div>
        </div>
      </div>
      <img src="photo1.png" alt="" className={styles.aboutImage} />
    </section>
  );
};
