import { StarComponent } from '@components/starComponent/StarComponent';
import styles from './schedule.module.css';
import { useState } from 'react';
import { OrderComponent } from '@components/orderComponent/OrderComponent';

const STARS = new Array(5).fill({ starComponent: <StarComponent />, class: 'star' });

const DATE = { day: 'Пятница', span: '14', month: 'сентября' };

const FREE_PLACES = [
  {
    time: '15:00 - 18:00',
    price: '1500₽',
    freePlaces: 'Осталось — 1 место',
  },
  {
    time: '19:00 - 22:00',
    price: '1500₽',
    freePlaces: 'Осталось — 1 место',
  },
];

export const Schedule = () => {
  const [isModalOen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={styles.schedule}>
      <h2>Доступная съемка в ближайшее время:</h2>
      <table>
        <tbody>
          <tr>
            <th>
              <h4>
                {DATE.day + ' '}
                <span>{DATE.span + ' '}</span>
                {DATE.month}
              </h4>
              <button className={styles.calendarButton}></button>
            </th>
          </tr>
          {FREE_PLACES.map((place, index) => (
            <tr key={index + place.time}>
              <td>
                <div className={styles.tableMainInfo}>
                  <h4 className={styles.photoshootTime}>{place.time}</h4>
                  <span className={styles.photoshootPrice}>{place.price}</span>
                  <h4 className={styles.photoshootFreeSlots}>{place.freePlaces}</h4>
                </div>
                <button className={styles.chooseButton} onClick={openModal}>
                  Выбрать
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td id={styles.tdSlogan}>
              <div className={styles.sloganContainer}>
                <div className={styles.reviewsSlogan}>
                  <img src="cup.svg" alt="cup" className={styles.reviewIcon} />
                  <p className={styles.slogan}>
                    Более <span>50</span> отзывов с оценкой
                  </p>
                  <div className="stars">
                    {STARS.map((star, index) => (
                      <div className={star.class} key={index}>
                        {star.starComponent}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <OrderComponent isOpen={isModalOen} onClose={closeModal}></OrderComponent>
    </section>
  );
};
