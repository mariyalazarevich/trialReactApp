import { ButtonArrow } from '@components/buttonArrow/ButtonArrow';
import { StarComponent } from '@components/starComponent/StarComponent';
import styles from './reviews.module.css';

const STARS = new Array(5).fill({ starComponent: <StarComponent />, class: 'star' });

const REVIEWS = [
  {
    reviewersPhoto: 'rev1.png',
    reviewersName: 'Валерия Антонова',
    reviewersJob: 'Арт-директор',
    reviewImage: 'ok.png',
    reviewDescription: 'Супер! Я бы заказал съемку снова!',
    reviewText:
      'Хотим выразить огромную благодарность вашей компании! Получили море ощущений, все прошло просто замечательно. Фотки получились великолепные, отдельное спасибо фотографу!',
    reviewDate: '27 Апреля, 2019г.',
  },
  {
    reviewersPhoto: 'rev2.png',
    reviewersName: 'Виталий Петров',
    reviewersJob: 'Фотограф',
    reviewImage: 'ok.png',
    reviewDescription: 'Супер! Я бы заказал съемку снова!',
    reviewText:
      'Восторг! :) Очень понравилось :) Захватили последний теплый, солнечный октябрьский день :) Впечатлило всё: сам вертолет, взлет, полёт, приземление. Организация полёта отличная.',
    reviewDate: '19 Апреля, 2019г.',
  },
  {
    reviewersPhoto: 'rev3.png',
    reviewersName: 'Джим Керри',
    reviewersJob: '',
    reviewImage: 'ok.png',
    reviewDescription: 'Супер! Я бы заказал съемку снова!',
    reviewText:
      'Круто-круто-круто!!! Отмечали мой ДэРэ. Отлично провели время!!! Кстати закуски были вкусными и сытными))Мы с собой ничего не брали. Сами много фоткались,поэтому воспоминания обалденные!!!)) А еще нам всем напечатали по сертификату воздухоплавателя, правда некоторые ленятся за ним съездить))) Но все равно приятно. Короче, Презентстар – проверено. Оценка: пять!',
    reviewDate: '11 Апреля, 2019г.',
  },
];

export const Reviews = () => {
  return (
    <section className={styles.reviews}>
      <h2>Отзывы:</h2>

      {REVIEWS.map((curReview, index) => (
        <div className={styles.review} key={curReview.reviewersName + index}>
          <img
            src={curReview.reviewersPhoto}
            alt="reviewrs_photo"
            className={styles.reviewersPhoto}
          />
          <div className={styles.reviewContainer}>
            <h3 className={styles.reviewersName}>{curReview.reviewersName}</h3>
            <h4 className={styles.reviewersJob}>{curReview.reviewersJob}</h4>
            <div className={styles.shortReview}>
              <div className="stars" style={{ margin: '0px' }}>
                {STARS.map((star, index) => (
                  <div className={star.class} key={index}>
                    {star.starComponent}
                  </div>
                ))}
              </div>
              <div className={styles.shortReviewContainer}>
                <img
                  src={curReview.reviewImage}
                  alt={curReview.reviewImage.slice(0, -3)}
                  className={styles.shortReviewImage}
                />
                <h4 className={styles.reviewDescription}>{curReview.reviewDescription}</h4>
              </div>
            </div>
            <p className={styles.reviewText}>{curReview.reviewText}</p>
            <h4 className={styles.reviewDate}>{curReview.reviewDate}</h4>
            <div className={styles.line}></div>
          </div>
        </div>
      ))}

      <div className={styles.buttonContainer}>
        <ButtonArrow />
        <button className="extendInfo">Показать Все (134)</button>
        <ButtonArrow />
      </div>
    </section>
  );
};
