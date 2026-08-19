import styles from './photos.module.css';

export const Photos = () => {
  return (
    <section className={styles.photos}>
      <h4 className={styles.photosDescription}>Фотографии пакета:</h4>
      <div className={styles.photosExample}>
        <img src="photo2.png" alt="" className={styles.photoExample} />
        <img src="photo3.png" alt="" className={styles.photoExample} />
        <img src="photo1.png" alt="" className={styles.photoExample} />
        <img src="photo4.png" alt="" className={styles.photoExample} />
        <img src="photo1.png" alt="" className={styles.photoExample} />
        <img src="photo4.png" alt="" className={styles.photoExample} />
        <img src="photo3.png" alt="" className={styles.photoExample} />
        <img src="photo1.png" alt="" className={styles.photoExample} />
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.buttonArrow}></div>
        <button className={styles.extendInfo}>Показать все фото</button>
        <div className={styles.buttonArrow}></div>
      </div>
    </section>
  );
};
