import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainContainer}>
        
        <div className={styles.ContactMenu}>
          Contact
          <a>Email: andy.tangg4@gmail.com</a>
          <a>Phone: +1(825)365-6944</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;