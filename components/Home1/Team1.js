import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Team1() {
    const team = [
        {
            id: 1,
            img: (
                <Image
                    src="/img/team/team1.jpg"
                    layout="responsive"
                    width={370}
                    height={400}
                />
            ),
            name: "Roadmap 1",
            designation: "Software Developer"
        },
        {
            id: 2,
            img: (
                <Image
                    src="/img/team/team3.jpg"
                    layout="responsive"
                    width={370}
                    height={400}
                />
            ),
            name: "Parsley Montana",
            designation: "Software Developer"
        },
        {
            id: 3,
            img: (
                <Image
                    src="/img/team/team2.jpg"
                    layout="responsive"
                    width={370}
                    height={400}
                />
            ),
            name: "Rodney Artichoke",
            designation: "Software Developer"
        }
    ];

    return (
        <>
            {/* <!-- TEAM START --> */}
            <div className="team-area pb-200">
                <div className="container">
                    <div className="team_content text-center">
                        <h2 className="section-title team_title text-dark mb-65">About Our Team Member We have<br /> Powerful User
                            Experience.</h2>
                    </div>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y,]}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplaydisableoninteraction={"false"}
                        loop={true}
                        className="team-active tp-dot-style"
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
                         {team.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="single-team text-center">
                                    <div className="team-item team-padding ">
                                        <div className="team_item_four hover_bg">
                                            {item.img}
                                            <div className="team_content">
                                                <h5><Link legacyBehavior href="/team"><a>{item.name}</a></Link></h5>
                                                <p>{item.designation}</p>
                                                <div className="team_social_icon">
                                                    <Link legacyBehavior href="#"><a><i className="fab fa-twitter"></i></a></Link>
                                                    <Link legacyBehavior href="#"><a><i className="fab fa-pinterest-p"></i></a></Link>
                                                    <Link legacyBehavior href="#"><a><i className="fab fa-vimeo-v"></i></a></Link>
                                                    <Link legacyBehavior href="#"><a><i className="fab fa-facebook-f"></i></a></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        
                    </Swiper>
                </div>
            </div>
            {/* <!-- TEAM ENDE --> */}

        </>
    )
}
