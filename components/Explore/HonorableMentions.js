import { useEffect, useRef } from "react";

export default function HonorableMentions({ collection }) {
  const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null);

    return (
      <img
        onMouseOver={() => {
          imageRef.current.src = secondaryImg;
        }}
        onMouseOut={() => {
          imageRef.current.src = primaryImg;
        }}
        src={primaryImg}
        alt=""
        ref={imageRef}
        className=" object-cover group-hover:opacity-75"
        // height={300}
        // width={300}
      />
    );
  };

  return (
    <>
      <div className="container mt-32">
        {/*  heading start*/}
        <div
          className="features feturesCommon wow fadeInUp mb-3 mt-3"
          data-wow-delay=".3s"
          style={{
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInUp",
          }}
        >
          <span className="text-5xl">💟</span>
          <div className="features__content">
            <h2 className="section-title">Honorable Mentions</h2>
          </div>
        </div>
        {/*  heading end*/}

        {/*   grid starts */}
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {collection.map((obj) => (
            <li key={obj.id} className="relative">
              <div className="border-1 group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <ImageToggleOnMouseOver
                  primaryImg={obj.image}
                  secondaryImg={obj.drawing}
                  alt=""
                />
              </div>
              <p className="pointer-events-none block text-sm font-medium text-gray-500 mt-2">
                {obj.description}
              </p>
            </li>
          ))}
        </ul>
        {/*    grid end*/}
      </div>
    </>
  );
}
