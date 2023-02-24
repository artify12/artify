import React from 'react'
import Link from 'next/link'

export default function AppSlider1() {
  return (
    <>
      {/* App Slider Start */}
      <div className="app_slider  d-flex align-items-center fix">
        <div className="App_shape-circle">
          <img className="shapeAbsoulute scale-upOne d-sm-none d-md-block" style={{ width: '300px', height: '300px' }} src="/img/shape/circle-1.svg" alt="" />
          <img className="shape10" src="/img/shape/circle-4.svg" style={{width: "40px", height: "40px"}} alt="" />
          <img className="shape13" src="/img/shape/shape13.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
              <div className="App_shape wow fadeInLeft  d-sm-none d-md-block d-none d-sm-block"
                data-wow-delay="0.1s"
                style={{ "visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInLeft" }}>
                <img src="/img/shape/mainshape.png" alt="" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 d-flex align-items-center">
              <div className="app_sliderContent">
                <div className="shapeesright">
                  <img className="shape1" src="/img/shape/circle-2.svg" style={{ width: "40px", height: "40px" }} alt="" />
                  <img className="shape2" src="/img/shape/circle-1.svg" style={{ width: "20px", height: "20px" }} alt="" />
                  <img className="shape3" src="/img/shape/circle-4.svg" style={{ width: "40px", height: "40px" }} alt="" />
                  <img className="shape4" src="/img/shape/circle-3.svg" style={{ width: "150px", height: "150px" }} alt="" />
                  <img className="shape5" src="/img/shape/circle-2.svg" style={{ width: '30px', height: '30px' }} alt="" />
                  <img className="shape6" src="/img/shape/circle-4.svg" style={{ width: "40px", height: "40px" }} alt="" />
                  <img className="shape7" src="/img/shape/circle-4.svg" style={{ width: "40px", height: "40px" }} alt="" />
                  <img className="shape8" src="/img/shape/circle-3.svg" style={{ width: "60px", height: "60px" }} alt="" />
                  <img className="shape9" src="/img/shape/circle-4.svg" style={{ width: "40px", height: "40px" }} alt="" />
                  <img className="shape10" src="/img/shape/circle-4.svg" style={{ width: "40px", height: "40px" }} alt="" />
                </div>
                <h2 className="hero-two-title">Artify: Create. Innovate. Inspire<br /></h2>
                <p>Unlock your creative potential with Artify&#39;s AI-powered art platform</p>
                <div className="slider-btn">
                  <Link legacyBehavior href="/draw"><a className="btn-outline">Try our App</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* App Slider End */}

    </>
  )
}
