import React from 'react'
import Link from 'next/link'

export default function Footer({className}) {
    return (
        <>
            {/* <!-- FOOTER START --> */}
        <div className={`footer-area ${className}`}>
          <div className="footer_bottom pt-15 pb-15">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="copyright_text pt-20">
                    <p>@ 2023  Design by <span>Artify</span></p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="footer_social f-right">
                    <span>Follow us</span>
                    <Link legacyBehavior href="#"><a><i className="fab fa-twitter"></i></a></Link>
                    <Link legacyBehavior href="#"><a><i className="fab fa-pinterest-p"></i></a></Link>
                    <Link legacyBehavior href="#"><a><i className="fab fa-vimeo-v"></i></a></Link>
                    <Link legacyBehavior href="#"><a><i className="fab fa-facebook-f"></i></a></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- FOOTER END --> */}
        </>
    )
}
