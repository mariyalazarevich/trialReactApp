import styles from './map.module.css';

const LOCATION = [
  {
    class: 'where',
    question: 'Где встречаемся?',
    answer: 'Москва',
  },
  {
    class: 'time',
    question: 'Время съемки',
    answer: '3 часа',
  },
  {
    class: 'freePlace',
    question: 'Мест осталось:',
    answer: '2 места',
  },
];

export const Map = () => {
  return (
    <section className={styles.mapSection}>
      <div className={styles.map}>
        <div className={styles.locationDescription}>
          {LOCATION.map((el, index) => (
            <div className={styles.descriptionElements} key={el.class + index}>
              <img
                src={index + 1 + '.svg'}
                alt={'number' + (index + 1)}
                className={styles.number}
              />
              <div>
                <h2 className={styles.question}>{el.question}</h2>
                <p className={styles.answer}>{el.answer}</p>
              </div>
            </div>
          ))}
          <div className={styles.descriptionElements}>
            <img src="org_image.png" alt="org_image" className={styles.photoElement} />
            <div>
              <h2 className={styles.name}>Мария Иванова</h2>
              <p className={styles.job}>Фотограф</p>
              <button className="extendInfo" style={{ fontSize: '14px', marginLeft: '0px' }}>
                Показать больше информации
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
