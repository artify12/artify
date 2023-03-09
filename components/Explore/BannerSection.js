import Link from "next/link";

export default function BannerSection(banner) {
  return (
    <div className="h-70 mt-4">
      <div className="  d-flex align-items-center fix">
        <div className="App_shape-circle">
          {/*<img*/}
          {/*  className="shapeAbsoulute scale-upOne d-sm-none d-md-block"*/}
          {/*  style={{ width: "300px", height: "300px" }}*/}
          {/*  src="/img/shape/circle-1.svg"*/}
          {/*  alt=""*/}
          {/*/>*/}
          {/*<img*/}
          {/*  className="shape10"*/}
          {/*  src="/img/shape/circle-4.svg"*/}
          {/*  style={{ width: "40px", height: "40px" }}*/}
          {/*  alt=""*/}
          {/*/>*/}
          <img className="shape13" src="/img/shape/shape13.png" alt="" />
        </div>
      </div>
      <div className="container   mt-32">
        <img
          src={banner.banner}
          className="object-cover max-h-[400px] w-full rounded-lg"
          alt=""
          placeholder="blur"
        />
      </div>
    </div>
  );
}
