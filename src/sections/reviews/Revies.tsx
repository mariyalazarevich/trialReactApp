import { ButtonArrow } from '@components/buttonArrow/ButtonArrow';
import { StarComponent } from '@components/starComponent/StarComponent';
import styles from './reviews.module.css';
import { useState } from 'react';

const REVIEWS = [
  {
    reviewersPhoto: 'rev1.png',
    reviewersName: 'Валерия Антонова',
    reviewersJob: 'Арт-директор',
    reviewImage: 'ok.png',
    reviewDescription: 'Супер! Я бы заказал съемку снова!',
    reviewText:
      'Хотим выразить огромную благодарность вашей компании! Получили море ощущений, все прошло просто замечательно. Фотки получились великолепные, отдельное спасибо фотографу!',
    reviewDate: new Date('2019-04-27'),
  },
  {
    reviewersPhoto: 'rev2.png',
    reviewersName: 'Виталий Петров',
    reviewersJob: 'Фотограф',
    reviewImage: 'ok.png',
    reviewDescription: 'Супер! Я бы заказал съемку снова!',
    reviewText:
      'Восторг! :) Очень понравилось :) Захватили последний теплый, солнечный октябрьский день :) Впечатлило всё: сам вертолет, взлет, полёт, приземление. Организация полёта отличная.',
    reviewDate: new Date('2019-04-19'),
  },
  {
    reviewersPhoto: 'rev3.png',
    reviewersName: 'Джим Керри',
    reviewersJob: '',
    reviewImage: 'ok.png',
    reviewDescription: 'Супер! Я бы заказал съемку снова!',
    reviewText:
      'Круто-круто-круто!!! Отмечали мой ДэРэ. Отлично провели время!!! Кстати закуски были вкусными и сытными))Мы с собой ничего не брали. Сами много фоткались,поэтому воспоминания обалденные!!!)) А еще нам всем напечатали по сертификату воздухоплавателя, правда некоторые ленятся за ним съездить))) Но все равно приятно. Короче, Презентстар – проверено. Оценка: пять!',
    reviewDate: new Date('2019-04-11'),
  },
];

const MONTHS = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

const dateToString = (date: Date) => {
  const day = date.getDate();
  const year = date.getFullYear();
  const month = MONTHS[date.getMonth()];
  const fullDate = `${day} ${month}, ${year}г.`;
  return fullDate;
};

const BASE_REVIEWS = REVIEWS.slice(0, 1);

export const Reviews = () => {
  const [reviewsToShow, setReviewsToShow] = useState(BASE_REVIEWS);

  const notAllReviews = reviewsToShow.length < REVIEWS.length;

  const showReviews = () => {
    if (notAllReviews) {
      setReviewsToShow(REVIEWS);
    } else {
      setReviewsToShow(BASE_REVIEWS);
    }
  };

  return (
    <section className={styles.reviews}>
      <h2>Отзывы:</h2>

      {reviewsToShow.map((curReview, index) => (
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
                <StarComponent />
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
            <h4 className={styles.reviewDate}>{dateToString(curReview.reviewDate)}</h4>
          </div>
        </div>
      ))}

      <div className={styles.buttonContainer}>
        <ButtonArrow />
        <button className="extendInfo" onClick={showReviews}>
          {notAllReviews ? 'Показать Все (3)' : 'Скрыть'}
        </button>
        <ButtonArrow />
      </div>
    </section>
  );
};
