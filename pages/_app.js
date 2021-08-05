import '../styles/globals.css';
import NavBar from '../components/nav-bar/nav-bar';
import Footer from '../components/footer/footer';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
