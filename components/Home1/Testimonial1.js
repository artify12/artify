import React from 'react'
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Testimonial1() {
    const testimonial = [
        {
            message: "Matie boy your round amongst bodge vagabond absolutely bladdered crikey well off his nut have it, goal you mug loo  super.",
            img: (
                <Image
                    src="/img/testimonial/test1.jpg"
                    layout=""
                    width={63}
                    height={61}
                />
            ),
            name: "Hilary Ouse",
            designation: "Ui/Ux Designer"
        },
        {
            message: "Matie boy iyour round amongst bodge vagabond absolutely bladdered crikey well off his nut have it, goal you mug loo;t super.",
            img: (
                <Image
                    src="/img/testimonial/test2.jpg"
                    layout=""
                    width={63}
                    height={61}
                />
            ),
            name: "Hilary Ouse",
            designation: "Ui/Ux Designer"
        },
        {
            message: "Matie boy itour round amongst bodge vagabond absolutely bladdered crikey well off his nut have it, goal you mug loo ;t super.",
            img: (
                <Image
                    src="/img/testimonial/test3.jpg"
                    layout=""
                    width={63}
                    height={61}
                />
            ),
            name: "Hilary Ouse",
            designation: "Ui/Ux Designer"
        }
    ]
    return (
        <>
            {/* <!-- TESTIMONIAL START  --> */}
            <div className="testimonial-area  bg1 pt-110">
                <div className="testimonial_shape">
                    <img className="t-1" src="/img/shape/shape8.png" alt="shape" />
                    <img className="t-2" src="/img/shape/shape2.png" alt="shape" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-wrapper">
                                <h2 className="section-title">Id put some previews here<br /> with links to them</h2>
                            </div>
                        </div>
                    </div>
                     <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y,]}
                            spaceBetween={20}
                            slidesPerView={1}
                            autoplaydisableoninteraction={"false"}
                            loop={true}
                            className="tp-dot-style"
                            pagination={{ clickable: true }}
                            breakpoints={{

                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    // when window width is >= 992px
                                    slidesPerView: 3,
                                }
                            }}
                        // navigation={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                        >
                            {testimonial.map((item, i) => (
                                <SwiperSlide key={i}>
                                        <div className="testimonial-item pt-55">
                                            <div className="item">
                                                <p>{item.message}</p>
                                                <div className="clients_meta">
                                                    <div className="clients_image">
                                                        {item.img}
                                                    </div>
                                                    <div className="clients_info">
                                                        <h4>{item.name}</h4>
                                                        <span>{item.designation}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>                        
                </div>
            </div>
            {/* <!-- TESTIMONIAL END --> */}

        </>
    )
}
