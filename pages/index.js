import Testimonials from 'components/Home1/Testimonials'
import Head from 'next/head'
import AppSlider1 from '../components/Home1/AppSlider1'
import Features1 from '../components/Home1/Features1'
import FeaturesContent from '../components/Home1/FeaturesContent'
import Testimonial1 from '../components/Home1/Testimonial1'
import Try1 from '../components/Home1/Try1'
import Layout1 from '../layouts/Layout1'

export default function Home() {

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
      <Layout1>
        <AppSlider1 />
        <Features1 />
        <FeaturesContent />
        <Testimonials />
        <Testimonial1 />
        <Try1 />
      </Layout1>
    </>
  )
}
