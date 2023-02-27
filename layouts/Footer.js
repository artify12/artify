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
                    <p><span>artifyerc@gmail.com</span></p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="footer_social f-right">
                    <span>Follow us</span>
                    <Link legacyBehavior href="https://t.me/artifylabs"><a><i className="fab fa-telegram"></i></a></Link>
                    <Link legacyBehavior href="https://twitter.com/artifyerc"><a><i className="fab fa-twitter"></i></a></Link>
                    <Link legacyBehavior href="https://medium.com/@artifylabs"><a><i className="fab fa-medium"></i></a></Link>
                    <Link legacyBehavior href="https://artify.gitbook.io/artify-whitepaper/"><a><i className="fab fa-github"></i></a></Link>
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
