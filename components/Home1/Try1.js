import React from 'react'
import Link from 'next/link'

export default function Try1() {
    return (
        <>
         {/* <!-- TRY START  --> */}
        <div className="try-area pt-100 mb-40">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <div className="try_box">
                            <div className="try-shape">
                                <img className="tryshape" src="/img/shape/shape3.png" alt="shape" />
                            </div>
                            <div className="row">
                                <div className="col-xl-7 col-lg-7">
                                    <h2>Try Our App</h2>
                                    <p>Horse play argy-bargy me old mucker boot bog show off show off pick your nose and
                                        blow off sloshed my cack buggered.</p>
                                </div>
                                <div className="col-xl-5 col-lg-5">
                                    <div className="try_btn_center">
                                        <div className="try_btn">
                                            <Link legacyBehavior href="/draw"><a className="btn btnfree">Free Trail</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- TRY END  --> */}
            
        </>
    )
}
