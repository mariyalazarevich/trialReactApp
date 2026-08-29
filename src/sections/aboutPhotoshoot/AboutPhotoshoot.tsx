import { StarComponent } from '@components/starComponent/StarComponent';
import styles from './aboutPhotoshoot.module.css';

export const AboutPhotoshoot = () => {
  return (
    <section className={styles.aboutPhotoshoot}>
      <div className={styles.aboutContainer}>
        <h2>Фотоссесия в вертолете</h2>
        <p id={styles.aboutPhotoshoot}>
          Полет на вертолете это прекрасная возможность получить новые ощущения! А наш замечательный
          фотограф запечатлит лучшие моменты
        </p>
        <ul className={styles.photoshootInfo}>
          <li className={styles.photoshootDuration}>
            <img src="time.svg" alt="time" />
            <h4>3 часа съемки</h4>
          </li>
          <li className={styles.photoQuantity}>
            <img src="camera.svg" alt="camera" />
            <h4>Более 50 фотографий</h4>
          </li>
          <li className={styles.photoshootLocation}>
            <img src="location.svg" alt="location" />
            <h4>Москва</h4>
          </li>
          <li className={styles.photoshootQuestions}>
            <img src="messages.svg" alt="messages" />
            <h4>Готовы ответить на любые вопросы</h4>
          </li>
        </ul>
        <div className={styles.sloganContainer}>
          <div className={styles.reviewsSlogan}>
            <img src="cup.svg" alt="cup" className={styles.reviewIcon} />
            <p className={styles.slogan}>
              Более <span>50</span> отзывов с оценкой
            </p>
            <div className="stars">
              <StarComponent />
            </div>
          </div>
        </div>
      </div>
      <img src="photo1.png" alt="photo" className={styles.aboutImage} />
    </section>
  );
};
