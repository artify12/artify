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
            message: "a man with a hat blowing smoke",
            img: (
                <Image
                    src="/img/about/smoke.png"
                    layout=""
                    width={300}
                    height={500}
                />
            ),
            name: "https://artifylabs.io/artifacts/bphskwboi5cczkmg7cyzaqb5ia",
        },
        {
            message: "mountain with a creek and sun setting behind it",
            img: (
                <Image
                    src="/img/about/mountain.png"
                    layout=""
                    width={300}
                    height={500}
                />
            ),
            name: "https://artifylabs.io/artifacts/auzt5l4cujc3zduncywmbyunda",
        },
        {
            message: "futuristic cybertruck",
            img: (
                <Image
                    src="/img/about/cybertruck.png"
                    layout=""
                    width={300}
                    height={500}
                />
            ),
            name: "https://artifylabs.io/artifacts/vlr4vyie4fabxc5wpuara5dun4"
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
                                <h2 className="section-title">Preview of Artify Creations</h2>
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
                                            <div className="item flex justify-center align-center flex-col">
                                                    <div className="w-full flex items-center justify-center">
                                                        {item.img}
                                                    </div>
                                                <div className="flex items-center justify-center text-center">
                                                    <div className="clients_info">
                                                    <a href={item.name}>See it in action</a>
                                                <p>{item.message}</p>
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
