import StarIcon from '../../assets/star.svg';
import styles from './starComponent.module.css';

export const StarComponent = () => (
  <div className={styles.stars}>
    <div className={styles.star}>
      <StarIcon />
    </div>
    <div className={styles.star}>
      <StarIcon />
    </div>
    <div className={styles.star}>
      <StarIcon />
    </div>
    <div className={styles.star}>
      <StarIcon />
    </div>
    <div className={styles.star}>
      <StarIcon />
    </div>
  </div>
);
