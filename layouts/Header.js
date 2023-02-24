import Link from 'next/link'
import { useState} from 'react';
import NavBar from './NavBar';
import NavBarMobile from './NavBarMobile';

export default function Header() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);

    

    return (
        <>
            {/* Header Start */}
            <header>
                <div id="header-sticky" className="header-area transparent-header pt-10 pb-10">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-7 col-10 d-flex align-items-center">
                                <div className="logo">
                                    <Link legacyBehavior href="/"><a> <img src="/img/logo/logo.png" style={{height: "80px"}} alt="" /> </a></Link>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-4 col-8 d-none d-md-block">
                                <div className="header-btn f-right d-none d-md-block">
                                    <Link legacyBehavior href="https://app.uniswap.org/#/swap?&chain=mainnet&use=v2&outputCurrency=0xa41161AF8D4Ee421ba5fED4328F2B12034796A21"><a className="btn"><i className="fal fa-coin"></i>Buy $AFY</a></Link>
                                </div>
                                <div className="main-menu colormenu d-none d-lg-block">
                                    <NavBar />
                                </div>
                            </div>
                            <div className="col-2 col-md-1">
                                <div className="side-menu-icon d-lg-none text-end">
                                    <button onClick={toggleTrueFalse} className="side-toggle"><i className="far fa-bars"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Header End */}

            <div className="fix">
                <div className={`side-info ${isToggled ? "info-open" : ""}`}>
                    <button onClick={toggleTrueFalse} className="side-info-close"><i className="fal fa-times"></i></button>
                    <div className="side-info-content">
                        <div className={`mobile-menu`}>
                            <NavBarMobile/>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={toggleTrueFalse} className={`offcanvas-overlay ${isToggled ? "overlay-open" : ""}`}></div>


        </>
    )
}
