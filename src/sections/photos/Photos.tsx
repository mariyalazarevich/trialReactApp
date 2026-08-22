import { ButtonArrow } from '../../components/buttonArrow/ButtonArrow';
import styles from './photos.module.css';
import { useEffect, useState } from 'react';

const PHOTOS = [2, 3, 1, 4, 1, 4, 3, 1].map(photoNumber => `photo${photoNumber}.png`);
const BASIC_PHOTOS = PHOTOS.slice(0, 2);

const getAllPhotos = (): Promise<Array<string>> => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(PHOTOS);
    }, 3000)
  );
};

export const Photos = () => {
  const [photosToShow, setPhotosToShow] = useState(BASIC_PHOTOS);

  const isNotAllPhoto = photosToShow.length < PHOTOS.length;

  const [allPhotosByRequest, setAllPhotoByRequest] = useState<Array<string> | undefined>();

  const [isLoading, setIsLoading] = useState(false);

  const showAll = async () => {
    if (isNotAllPhoto) {
      if (!allPhotosByRequest) {
        setIsLoading(true);
        setAllPhotoByRequest(await getAllPhotos());
      } else {
        setPhotosToShow(allPhotosByRequest);
      }
    } else {
      setPhotosToShow(BASIC_PHOTOS);
    }
  };

  useEffect(() => {
    if (isNotAllPhoto && allPhotosByRequest && photosToShow !== allPhotosByRequest) {
      setPhotosToShow(allPhotosByRequest);
      setIsLoading(false);
    }
  }, [allPhotosByRequest]);

  return (
    <section className={styles.photos}>
      <h4 className={styles.photosDescription}>Фотографии пакета:</h4>
      <div className={styles.photosExample}>
        {isLoading
          ? 'Фото загружаются...'
          : photosToShow.map((photoPath, index) => (
              <img
                src={photoPath}
                alt="photo"
                className={styles.photoExample}
                key={photoPath + index}
              />
            ))}
      </div>
      <div className={styles.buttonContainer}>
        <ButtonArrow />
        <button className="extendInfo" onClick={showAll}>
          {isNotAllPhoto ? 'Показать все фото' : 'Cкрыть все фото'}
        </button>
        <ButtonArrow />
      </div>
    </section>
  );
};
