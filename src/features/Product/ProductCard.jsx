/* eslint-disable react/prop-types */

import { HeartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const ProductCard = (props) => {
  const { el } = props;

  const [activeImage, setActiveImage] = useState(el.images.primary);

  return (
    <button className="h-full w-full  border border-transparent hover:border-black flex flex-col group">
      <div className="relative">
        <img
          className="w-full object-cover aspect-square"
          src={activeImage}
          alt=""
        />
        <button className="absolute hover right-2 top-2">
          <HeartIcon width={20} />
        </button>
        <h4 className="p-1.5 bg-neutral-50 absolute bottom-0 left-2 text-md font-semibold duration-200 group-hover:bottom-2">
          {el.prices.regular}
        </h4>
      </div>
      <div className=" bg-white h-full w-full">
        {/* <div className="w-full py-0.5">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation]}
          >
            <SwiperSlide className="w-12">
              <img
                className="h-full w-full object-cover aspect-square"
                src={el.images?.primary}
                alt=""
              />
            </SwiperSlide>
            {el.images?.additional?.map((image) => {
              return (
                <SwiperSlide
                  key={image}
                  onMouseOver={() => {
                    setActiveImage(image);
                  }}
                  className="w-12"
                  onMouseLeave={() => setActiveImage(el.images.primary)}
                >
                  <img
                    className="h-full w-full object-cover aspect-square"
                    src={image}
                    alt={image}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div> */}
        {/* ##TODO will be visible when the card is hovered */}
        <div className="p-2 text-start w-full">
          <h4 className="text-md font-semibold">{el.title}</h4>
          <p className="text-sm capitalise pt-1">{el.category.slice(-1)}</p>
        </div>
      </div>
    </button>
  );
};

export default ProductCard;
