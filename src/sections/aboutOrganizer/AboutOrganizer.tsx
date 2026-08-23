import { ButtonArrow } from '@components/buttonArrow/ButtonArrow';
import styles from './aboutOrganizer.module.css';

export const AboutOrganizer = () => {
  return (
    <section className={styles.aboutOrganizer}>
      <div className={styles.orgContainer}>
        <div className={styles.aboutOrgContainer}>
          <h2>Об организаторе:</h2>
          <div>
            <p>
              Всем привет! Я фотограф Мария! И по мимо фотосъемки я так же являюсь членом группы
              экспертов туристической отрасли, которые хорошо разбираются в маркетинге, операциях и
              услугах обслуживания клиентов, специализирующихся на совместном использовании и
              частных турах.{' '}
            </p>
            <p>
              Сначала мы (я и моя команда) изучаем интересы клиентов, а затем придумываем подходящее
              решение, которое соответствует бюджету и планам клиента. Мы никогда не зависим от
              субпоставщиков и не свяжемся…
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <button className="extendInfo" style={{ fontSize: '14px', marginLeft: '0px' }}>
              Читать еще
            </button>
            <ButtonArrow />
          </div>

          <h2>Что я предоставлю:</h2>
          <div>
            <p>
              Встречу вас на машине после длительного перелёта. Качественный подбор места и локации
              для вашей съемки. При необходимости всегда возможно прерваться на обед/ужин. Более 50
              фотографий на выходе с обработкой и замечательные впечатления о Дубае !
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <button className="extendInfo" style={{ fontSize: '14px', marginLeft: '0px' }}>
              Читать еще
            </button>
            <ButtonArrow />
          </div>
        </div>

        <div className={styles.organizer}>
          <div className={styles.orgImage}>
            <img src="/org_image.png" alt="org-image" />
          </div>
          <div className={styles.orgName}>Марина Иванова</div>
          <div className={styles.orgJob}>Фотограф</div>
          <button className="extendInfo" style={{ fontSize: '14px', width: '150px' }}>
            Показать больше информации о фотографе
          </button>
        </div>
      </div>
    </section>
  );
};
