import '../public/css/style.css'
import '../public/css/animate.min.css'
import '../public/css/fontawesome-all.min.css'
import '../public/css/meanmenu.css'
import '../public/css/responsive.css'
import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify'
import Head from 'next/head'
import pkg from "../package.json";
const HOST = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content={pkg.appMetaDescription} />
        <meta property="og:title" content={pkg.appName} />
        <meta property="og:description" content={pkg.appMetaDescription} />
        <meta
          property="og:image"
          content={`${HOST}/preview.png`}
        />
        <title>{pkg.appName}</title>
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
