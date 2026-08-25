import { ButtonArrow } from '@components/buttonArrow/ButtonArrow';
import styles from './aboutOrganizer.module.css';
import { useShowInfo } from 'src/hooks/useShowInfoHook';
import { useEffect, useRef } from 'react';
import { IShowInfoContext } from 'src/contexts/showInfoContext';

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

const getButtonLabel = (isOpen: boolean): string => {
  return isOpen ? 'Скрыть информацию' : 'Читать еще';
};

export const AboutOrganizer: React.FC<IShowInfoContext> = ({
  isInformationOpen,
  toggleAboutOrganizer,
  toggleWhatIProvide,
  showAllInfo,
  closeAllInfo,
  isAllOpen,
  setRef,
}) => {
  const refAboutOrganizer = useRef<HTMLElement>(null);
  useEffect(() => {
    if (refAboutOrganizer.current) {
      setRef(refAboutOrganizer);
    }
  }, [refAboutOrganizer.current, setRef]); //добавить showAllInfo в map.tsx

  // const {
  //   isInformationOpen,
  //   toggleAboutOrganizer,
  //   toggleWhatIProvide,
  //   showAllInfo,
  //   closeAllInfo,
  //   isAllOpen,
  // } = useShowInfo(refAboutOrganizer);

  return (
    <section className={styles.aboutOrganizer} ref={refAboutOrganizer}>
      <div className={styles.orgContainer}>
        <div className={styles.aboutOrgContainer}>
          <h2>Об организаторе:</h2>
          <div>
            <p>{ORGANIZER_DESCRIPTION.aboutOrganizer}</p>
            {isInformationOpen.aboutOrganizer && <p>{ORGANIZER_DESCRIPTION.aboutOrganizerMore}</p>}
          </div>
          <div className={styles.buttonContainer}>
            <button
              className="extendInfo"
              style={{ fontSize: '14px', marginLeft: '0px' }}
              onClick={toggleAboutOrganizer}
              id="aboutOrganizerButton"
            >
              {getButtonLabel(isInformationOpen.aboutOrganizer)}
            </button>
            <ButtonArrow />
          </div>

          <h2>Что я предоставлю:</h2>
          <div>
            <p>{ORGANIZER_DESCRIPTION.whatIProvide}</p>
            {isInformationOpen.whatIProvide && <p>{ORGANIZER_DESCRIPTION.whatIProvideMore}</p>}
          </div>
          <div className={styles.buttonContainer}>
            <button
              className="extendInfo"
              style={{ fontSize: '14px', marginLeft: '0px' }}
              onClick={toggleWhatIProvide}
              id="whatIProvideButton"
            >
              {getButtonLabel(isInformationOpen.whatIProvide)}
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
            onClick={isAllOpen ? closeAllInfo : showAllInfo}
          >
            {isAllOpen ? 'Скрыть информацию' : 'Показать информацию о фотографе'}
          </button>
        </div>
      </div>
    </section>
  );
};
