import React from 'react'

export default function Features1() {
    return (
        <>
        {/* <!-- FETURES START --> */}
        <div className="homefeture_1 pt-115 pb-130">
            <div className="container">
                <div className="app_left_shape">
                    <img className="leftanimation d-none d-sm-block" src="/img/shape/left.png" alt="leftshape" />
                    <img src="/img/shape/shape7.png" alt="leftshape" />
                    <img className="downsahpe d-none d-sm-block" src="/img/shape/circle-3.svg" style={{width: '114px !important'}} alt="leftshape" />
                </div>
                <div className="section_title_wrapper text-center wow fadeInUp mb-70" data-wow-delay="0.3s"
                    style={{"visibility":"visible","animationDelay":"0.3s","animationName":"fadeInUp"}}>
                    <h2 className="section-title">Write a catchphrase <br/> or add something similar</h2>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="feabox mb-30">
                            <div className="feabox__img mb-50">
                                <img src="/img/fetures/Forma1.png" alt="form1" />
                            </div>
                            <div className="feabox__content">
                                <h3 className="feabox-title tcolor0">Good thing 1</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="feabox mb-30 clr1">
                            <div className="feabox__img img1 mb-50">
                                <img src="/img/fetures/Forma2.png" alt="form2" />
                            </div>
                            <div className="feabox__content">
                                <h3 className="feabox-title tcolor1">Good thing 2</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="feabox mb-30 clr2">
                            <div className="feabox__img img2 mb-50">
                                <img src="/img/fetures/Forma3.png" alt="form3" />
                            </div>
                            <div className="feabox__content">
                                <h3 className="feabox-title tcolor2">Good thing 3</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="feabox mb-30 clr3">
                            <div className="feabox__img img3 mb-50">
                                <img src="/img/fetures/Forma4.png" alt="form4" />
                            </div>
                            <div className="feabox__content">
                                <h3 className="feabox-title tcolor3">Good thing 4</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- FETURES END --> */}
            
        </>
    )
}
