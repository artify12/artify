import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

export default function HotSection(files) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <>
      <div className="container mt-32 pb-10">
        {/*<div className="app_left_shape">*/}
        {/*  <img*/}
        {/*    className="leftanimation d-none d-sm-block"*/}
        {/*    src="/img/shape/left.png"*/}
        {/*    alt="leftshape"*/}
        {/*  />*/}
        {/*  <img src="/img/shape/shape7.png" alt="leftshape" />*/}
        {/*  <img*/}
        {/*    className="downsahpe d-none d-sm-block"*/}
        {/*    src="/img/shape/circle-3.svg"*/}
        {/*    style={{ width: "114px !important" }}*/}
        {/*    alt="leftshape"*/}
        {/*  />*/}
        {/*</div>*/}

        <div
          className="features feturesCommon wow fadeInUp mb-3 mt-3"
          data-wow-delay=".3s"
          style={{
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInUp",
          }}
        >
          <span className="text-5xl">🖼️</span>
          <div className="features__content">
            <h2 className="section-title">Hot Section</h2>
          </div>
        </div>

        <div className="w-100">
          <Carousel
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
          >
            {files.files.map((file, index) => {
              return (
                <div key={index} className="ml-6 max-w-full h-auto">
                  {/*<img src={file.url} alt="" className="rounded-lg" />*/}
                  <Image
                    width={512}
                    height={512}
                    src={file.url}
                    alt=""
                    className="rounded-lg object-fill"
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}
