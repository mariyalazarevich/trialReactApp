import { ButtonArrow } from '@components/buttonArrow/ButtonArrow';
import styles from './aboutOrganizer.module.css';
import { useState } from 'react';

const ORGANIZER_DESCRIPTION = {
  aboutOrganizer:
    'Всем привет! Я фотограф Мария! И по мимо фотосъемки я так же являюсь членом группы экспертов туристической отрасли, которые хорошо разбираются в маркетинге, операциях и услугах обслуживания клиентов, специализирующихся на совместном использовании и частных турах. \nСначала мы (я и моя команда) изучаем интересы клиентов, а затем придумываем подходящее решение, которое соответствует бюджету и планам клиента.',
  aboutOrganizerMore:
    'Мы умеем превращать «хочется» в «реально»: если ваш бюджет ограничен, мы найдем альтернативы без потери качества, а если вы хотите премиум-сервис — мы добавим эксклюзивные «фишки», которые знаем только мы. Важно, чтобы вы получили максимум именно за те деньги, которые готовы потратить.',
  whatIProvide:
    'Встречу вас на машине после длительного перелёта. Качественный подбор места и локации для вашей съемки. При необходимости всегда возможно прерваться на обед/ужин. Более 50 фотографий на выходе с обработкой и замечательные впечатления!',
  whatIProvideMore:
    'А также обеспечу полную координацию с пилотом для поиска идеального ракурса с воздуха: мы заранее обсудим схему полета, чтобы поймать нужный свет и драматичные виды сверху. Помимо этого, я беру на себя всю «земную» подготовку для «небесной» съемки: помогу подобрать правильную одежду, которая не будет развеваться в потоке воздуха, и скоординирую время вылета с вашим графиком отдыха.',
};

export const AboutOrganizer = () => {
  const [information, setInformation] = useState({
    ...ORGANIZER_DESCRIPTION,
    aboutOrganizerMore: '',
    whatIProvideMore: '',
  });
  const [buttonTexts, setButtonTexts] = useState({
    aboutOrganizerButton: 'Читать еще',
    whatIProvideButton: 'Читать еще',
    moreInfoAboutOrgButton: 'Показать больше информации о фотографе',
  });

  const showInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonId = e.currentTarget.id;
    if (buttonId === 'aboutOrganizerButton') {
      if (information.aboutOrganizerMore === '') {
        setInformation({
          ...information,
          aboutOrganizerMore: ORGANIZER_DESCRIPTION.aboutOrganizerMore,
        });
        setButtonTexts({ ...buttonTexts, aboutOrganizerButton: 'Скрыть информацию' });
      } else {
        setInformation({ ...information, aboutOrganizerMore: '' });
        setButtonTexts({ ...buttonTexts, aboutOrganizerButton: 'Читать еще' });
      }
    }
    if (buttonId === 'whatIProvideButton') {
      if (information.whatIProvideMore === '') {
        setInformation({
          ...information,
          whatIProvideMore: ORGANIZER_DESCRIPTION.whatIProvideMore,
        });
        setButtonTexts({ ...buttonTexts, whatIProvideButton: 'Скрыть информацию' });
      } else {
        setInformation({ ...information, whatIProvideMore: '' });
        setButtonTexts({ ...buttonTexts, whatIProvideButton: 'Читать еще' });
      }
    }
  };

  return (
    <section className={styles.aboutOrganizer}>
      <div className={styles.orgContainer}>
        <div className={styles.aboutOrgContainer}>
          <h2>Об организаторе:</h2>
          <div>
            <p>{information.aboutOrganizer}</p>
            <p>{information.aboutOrganizerMore}</p>
          </div>
          <div className={styles.buttonContainer}>
            <button
              className="extendInfo"
              style={{ fontSize: '14px', marginLeft: '0px' }}
              onClick={showInfo}
              id="aboutOrganizerButton"
            >
              {buttonTexts.aboutOrganizerButton}
            </button>
            <ButtonArrow />
          </div>

          <h2>Что я предоставлю:</h2>
          <div>
            <p>{information.whatIProvide} </p>
            <p>{information.whatIProvideMore}</p>
          </div>
          <div className={styles.buttonContainer}>
            <button
              className="extendInfo"
              style={{ fontSize: '14px', marginLeft: '0px' }}
              onClick={showInfo}
              id="whatIProvideButton"
            >
              {buttonTexts.whatIProvideButton}
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
          <button
            className="extendInfo"
            style={{ fontSize: '14px', width: '150px' }}
            id="moreInfoAboutOrgButton"
          >
            {buttonTexts.moreInfoAboutOrgButton}
          </button>
        </div>
      </div>
    </section>
  );
};
