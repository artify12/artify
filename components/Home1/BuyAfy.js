/* eslint-disable react/no-unknown-property */
import React, { useEffect } from 'react'
import Link from 'next/link'
export default function BuyAfy() {
    return (
        <>
            {/* <!-- FETURES CONTENT START --> */}
            <div className="homefeture_2 py-20"  id='howtobuy'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="features pt-105 wow fadeInLeft" data-wow-delay=".3s"
                                style={{ "visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInLeft" }}>
                                <span className='text-5xl'>💰</span>
                                <div className="features__content mb-30">
                                    <h2 className="section-title">Buy $AFY Token.
                                    </h2>
                                    <p>Artify partnered with Flooz to allow its investors to seamlessly purchase Artify tokens with Credit Cards, Apple Pay, or Crypto.<br/>
                                        A detailed guide on how to purchase the official Artify issued token - $AFY can be found at the link provided below.
                                    </p>
                                    <Link legacyBehavior href="https://medium.com/@artifylabs/a-guide-on-how-to-buy-artify-37e02069db27" target={'_blank'}><a>How to buy $AFY<i className="fal fa-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 flex items-center justify-center">
                            <div className="app-image wow fadeInRight" data-wow-delay=".3s"
                                style={{ "visibility": "visible", "animationDelay": "0.3s", "animationName": "fadeInRight" }}>
                               <iframe
            width="400"
            height={690}
            frameBorder={0}
            allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *"
            src="https://flooz.trade/embed/trade?swapDisabled=false&swapToTokenAddress=0xa41161AF8D4Ee421ba5fED4328F2B12034796A21&swapLockToToken=false&onRampDisabled=false&onRampAsDefault=true&onRampDefaultAmount=200&network=eth&lightMode=true&primaryColor=%23f1aa34&roundedCorners=0&padding=20&refId=TKKgKY"
        ></iframe>                 </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- FETURES CONTENT START 2nd Part --> */}

        </>
    )
}
