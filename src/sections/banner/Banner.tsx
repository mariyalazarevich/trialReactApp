import { useState } from 'react';
import styles from './banner.module.css';
import { OrderComponent } from '@components/orderComponent/OrderComponent';

export const Banner = () => {
  const [isModalOen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        <button className={styles.toBookButton} onClick={openModal}>
          Забронировать место
        </button>
        <OrderComponent isOpen={isModalOen} onClose={closeModal}></OrderComponent>
      </div>
    </section>
  );
};
