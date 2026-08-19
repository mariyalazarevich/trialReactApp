import styles from './reviews.module.css';

export const Reviews = () => {
  return (
    <section className={styles.reviews}>
      <h2>Отзывы:</h2>
      <div className={styles.review}>
        <img src="rev1.png" alt="" className={styles.reviewersPhoto} />
        <div className={styles.reviewContainer}>
          <h3 className={styles.reviewersName}>Валерия Антонова</h3>
          <h4 className={styles.reviewersJob}>Арт-директор</h4>
          <div className={styles.shortReview}>
            <div className={styles.stars}>
              <img src="star.svg" alt="" className={styles.star} />
              <img src="star.svg" alt="" className={styles.star} />
              <img src="star.svg" alt="" className={styles.star} />
              <img src="star.svg" alt="" className={styles.star} />
              <img src="star.svg" alt="" className={styles.star} />
            </div>
            <div className={styles.okContainer}>
              <img src="ok.png" alt="" className={styles.ok} />
              <h4 className={styles.reviewDescription}>Супер! Я бы заказал съемку снова!</h4>
            </div>
          </div>
          <h4 className={styles.reviewText}>
            Хотим выразить огромную благодарность вашей компании! Получили море ощущений, все прошло
            просто замечательно. Фотки получились великолепные, отдельное спасибо фотографу!
          </h4>
          <h4 className={styles.reviewDate}>27 Апреля, 2019г.</h4>
          <div className={styles.line}></div>
        </div>
      </div>
      <div className={styles.review}>
        <img src="rev2.png" alt="" className={styles.reviewersPhoto} />
        <div className={styles.reviewContainer}>
          <h3 className={styles.reviewersName}>Виталий Петров</h3>
          <h4 className={styles.reviewersJob}>Фотограф</h4>
          <div className={styles.shortReview}>
            <div className={styles.stars}>
              <img src="star.svg" alt="" className={styles.star} />
              <img src="star.svg" alt="" className={styles.star} />
              <img src="star.svg" alt="" className={styles.star} />
              <img src="star.svg" alt="" className={styles.star} />
              <img src="star.svg" alt="" className={styles.star} />
            </div>
            <div className={styles.okContainer}>
              <img src="ok.png" alt="" className={styles.ok} />
              <h4 className={styles.reviewDescription}>Супер! Я бы заказал съемку снова!</h4>
            </div>
          </div>
          <h4 className={styles.reviewText}>
            Восторг! :) Очень понравилось :) Захватили последний теплый, солнечный октябрьский день
            :) Впечатлило всё: сам вертолет, взлет, полёт, приземление. Организация полёта отличная.
            Спасибо!
          </h4>
          <h4 className={styles.reviewDate}>19 Апреля, 2019г.</h4>
          <div className={styles.line}></div>
        </div>
      </div>
      <div className={styles.review}>
        <img src="rev3.png" alt="" className={styles.reviewersPhoto} />
        <div className={styles.reviewContainer}>
          <h3 className={styles.reviewersName}>Джим Керри</h3>
          <h4 className={styles.reviewersJob}></h4>
          <div className={styles.shortReview}>
            <div className={styles.stars}>
              <img src="star.svg" alt="" className={styles.star} />
              <img src="star.svg" alt="" className={styles.star} />
              <img src="star.svg" alt="" className={styles.star} />
              <img src="star.svg" alt="" className={styles.star} />
              <img src="star.svg" alt="" className={styles.star} />
            </div>
            <div className={styles.okContainer}>
              <img src="ok.png" alt="" className={styles.ok} />
              <h4 className={styles.reviewDescription}>Супер! Я бы заказал съемку снова!</h4>
            </div>
          </div>
          <h4 className={styles.reviewText}>
            Круто-круто-круто!!! Отмечали мой ДэРэ. Отлично провели время!!! Кстати закуски были
            вкусными и сытными))Мы с собой ничего не брали. Сами много фоткались,поэтому
            воспоминания обалденные!!!)) А еще нам всем напечатали по сертификату воздухоплавателя,
            правда некоторые ленятся за ним съездить))) Но все равно приятно. Короче, Презентстар –
            проверено. Оценка: пять!
          </h4>
          <h4 className={styles.reviewDate}>11 Апреля, 2019г.</h4>
          <div className={styles.line}></div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <img src="arrow.svg" alt="" className={styles.buttonArrow} />
        <button className={styles.extendInfo}>Показать Все (134)</button>
        <img src="arrow.svg" alt="" className={styles.buttonArrow} />
      </div>
    </section>
  );
};
