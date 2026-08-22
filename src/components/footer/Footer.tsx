import { ButtonArrow } from '../buttonArrow/ButtonArrow';
import { FacebookComponent } from '../facebookComponent/FacebookComponent';
import { InstagramComponent } from '../instagramComponent/InstagramComponent';
import { MastercardComponent } from '../mastercardComponent/MastercardComponent';
import { VisaComponent } from '../visaComponent/VisaComponent';
import { VkComponent } from '../vkComponent/VkComponent';
import styles from './footer.module.css';

const TECH_SUPPORT = 'Тех. поддержка: 8(800)700-00-00';
const COPYRIGHT = '© 2018 HELYFLY. All Rights Reserved.';
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoFooter}>
        <div className={styles.helyflyLogo}>
          <img src="/HELYFLY.png" alt="logo"></img>
        </div>
        <div className={styles.buttons}>
          <a href="https://vk.com" className={styles.vkButton} target="_blank" rel="noreferrer">
            <VkComponent />
          </a>
          <a
            href="https://facebook.com"
            className={styles.facebookButton}
            target="_blank"
            rel="noreferrer"
          >
            <FacebookComponent />
          </a>
          <a
            href="https://instagram.com"
            className={styles.instagrammButton}
            target="_blank"
            rel="noreferrer"
          >
            <InstagramComponent />
          </a>
          <div className={styles.languageButton}>
            <p>RU</p>
            <ButtonArrow />
          </div>
        </div>
      </div>
      <div className={styles.rightsFooter}>
        <div className={styles.buttons}>
          <a
            href="https://mastercard.com"
            className={styles.mastercardButton}
            target="_blank"
            rel="noreferrer"
          >
            <MastercardComponent />
          </a>
          <a href="https://visa.com" className={styles.visaButton} target="_blank" rel="noreferrer">
            <VisaComponent />
          </a>
        </div>
        <h4 className={styles.rights}>
          <p>{TECH_SUPPORT}</p>
          <p>{COPYRIGHT}</p>
        </h4>
      </div>
    </footer>
  );
};
