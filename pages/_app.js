import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import NavBar from '../components/nav-bar/nav-bar';
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar/>
      <Component {...pageProps} />
      <footer className={styles.footer}>
        <a
          href="https://www.shopify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          For Themes Support @ 
          <span>
            <img src='/company-word-logo/shopify-word-logo.png' style={{height: 40, width: 60, marginLeft: 10}}/>
          </span>
        </a>
      </footer>
    </div>
  )
}

export default MyApp
