import '../public/css/style.css'
import '../public/css/animate.min.css'
import '../public/css/fontawesome-all.min.css'
import '../public/css/meanmenu.css'
import '../public/css/responsive.css'
import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
