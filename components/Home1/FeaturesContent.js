import React from 'react'
import Link from 'next/link'

export default function FeaturesContent() {
    return (
        <>
            {/* <!-- FETURES CONTENT START --> */}
            <div className="homefeture_2" id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="features pt-105 wow fadeInLeft" data-wow-delay=".3s"
                                style={{ "visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInLeft" }}>
                                <span className='text-5xl'>🎨</span>
                                <div className="features__content mb-30">
                                    <h2 className="section-title">Art made for everyone.
                                    </h2>
                                    <p>With Artify, you can unleash your creativity and experience the magic of AI-generated art. Our platform makes it
                                        easy to create stunning, one-of-a-kind artworks that are unique to you. Whether you want to create
                                        a custom piece for your home or sell your art on our marketplace, Artify has everything you need.
                                        .</p>
                                    <Link legacyBehavior href="https://medium.com" target={'_blank'}><a>Read More<i className="fal fa-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="app-image wow fadeInRight" data-wow-delay=".3s"
                                style={{ "visibility": "visible", "animationDelay": "0.3s", "animationName": "fadeInRight" }}>
                                <img src="/img/about/about1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- FETURES CONTENT END --> */}
            {/* <!-- FETURES CONTENT 2nd Part START --> */}
            <div className="app_image pt-105 ">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="app-image wow fadeInUp" data-wow-delay=".3s"
                                style={{ "visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInUp" }}>
                                <img src="/img/about/about2.png" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 pt-40 col-lg-6 col-md-12">
                            <div className="features feturesCommon wow fadeInUp" data-wow-delay=".3s"
                                style={{ "visibility": "visible", "animationDelay": "0.2s", "animationName": "fadeInUp" }}>
                                <span className='text-5xl'>🖼️</span>
                                <div className="features__content">
                                    <h2 className="section-title">Blockchain meets Art</h2>
                                    <p>Artify provides a zero-fee gasless NFT mint, allowing artists to easily create and sell their a
                                    rtwork on our platform without incurring any additional costs. This is a highly lucrative opportunity for 
                                    artists as they are able to maximize their profits by avoiding high transaction fees. Additionally, our Polygon i
                                    ntegration ensures that artists are able to easily and quickly mint their NFTs without any delays, allowing them to
                                     focus on creating and selling their artwork rather than worrying about technical barriers.</p>
                                    <Link legacyBehavior href="https://medium.com" target="_blank"><a>Read More<i className="fal fa-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- FETURES CONTENT START 2nd Part --> */}

        </>
    )
}
