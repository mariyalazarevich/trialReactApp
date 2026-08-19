import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.whiteFooter}>
        <div className={styles.helyflyTitle}>
          <img src="/HELYFLY.png"></img>
        </div>
        <div className={styles.buttons}>
          <img src="vk.svg" alt="" className={styles.vkButton} />
          <img src="Facebook.svg" alt="" className={styles.facebookButton} />
          <img src="Instragram.svg" alt="" className={styles.instagrammButton} />
          <div className={styles.languageButton}>
            <h4>RU</h4>
            <div className={styles.buttonArrow}></div>
          </div>
        </div>
      </div>
      <div className={styles.greyFooter}>
        <div className={styles.buttons}>
          <img src="MC.svg" alt="" className={styles.mastercardButton} />
          <img src="VISA.svg" alt="" className={styles.visaButton} />
        </div>
        <h4 className={styles.rights}>
          <p>Тех. поддержка: 8(800)700-00-00</p>
          <p>© 2018 HELYFLY. All Rights Reserved.</p>
        </h4>
      </div>
    </footer>
  );
};
