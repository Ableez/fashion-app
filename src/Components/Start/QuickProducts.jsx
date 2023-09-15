/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ProductCard from "../../features/Product/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import {
  ArrowLongRightIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { products } from "../../assets/products";

const QuickProducts = ({ children }) => {
  const [activeTab, setActiveTab] = useState(
    parseInt(localStorage.getItem("activeTab")) || 1
  );

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab.toString());
  }, [activeTab]);

  const allProducts = products.filter((prod) => prod.featured === true);

  const newIn = allProducts.filter((e) => e.category.includes("new-in"));
  const curated = allProducts.filter((e) => e.category.includes("curated"));
  const topPicks = allProducts.filter((e) => e.category.includes("top-picks"));

  return (
    <div className="min-h-fit duration-200 h-[445px] place-items-center my-24">
      {/* <nav className="grid grid-flow-col gap-4 md:gap-5 w-fit md:px-32 px-3 ">
        <button
          onClick={() => setActiveTab(1)}
          style={{ clipPath: "margin-box" }}
          className={`text-xl w-fit md:text-2xl font-bold grid grid-flow-col gap-2 place-items-center ${
            activeTab === 1
              ? "text-neutral-800 transform p-1"
              : "text-neutral-300"
          }`}
        >
          {activeTab === 1 && (
            <ArrowLongRightIcon
              width={40}
              className="transition-all duration-300 navArr"
            />
          )}
          New Arrivals
        </button>
        <button
          onClick={() => setActiveTab(2)}
          style={{ clipPath: "border-box" }}
          className={`text-xl w-fit md:text-2xl font-bold grid grid-flow-col gap-2  place-items-center ${
            activeTab === 2
              ? "text-neutral-800 transform p-1"
              : "text-neutral-300"
          }`}
        >
          {activeTab === 2 && (
            <ArrowLongRightIcon
              width={40}
              className="transition-all duration-300 navArr"
            />
          )}
          Top Picks
        </button>
        <button
          onClick={() => setActiveTab(3)}
          style={{ clipPath: "border-box" }}
          className={`text-xl w-fit md:text-2xl font-bold grid grid-flow-col gap-2  place-items-center ${
            activeTab === 3
              ? "text-neutral-800 transform p-1"
              : "text-neutral-300"
          }`}
        >
          {activeTab === 3 && (
            <ArrowLongRightIcon
              width={40}
              className="transition-all duration-300 navArr"
            />
          )}
          Curated Pieces
        </button>
      </nav> */}

      <div className="w-fit md:px-32 px-3 pb-6">
        <h4 className="text-4xl font-bold capitalize">Curated for you</h4>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 1,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 1,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 1,
          },
        }}
        pagination={{ dynamicBullets: true, clickable: true }}
        modules={[Pagination]}
        className="justify-between"
      >
        {activeTab === 1
          ? newIn.map((product) => {
              return (
                <SwiperSlide className="box-border" key={product.title}>
                  <ProductCard el={product} />
                </SwiperSlide>
              );
            })
          : activeTab === 2
          ? topPicks.sort().map((product) => {
              return (
                <SwiperSlide className="box-border" key={product.title}>
                  <ProductCard el={product} />{" "}
                </SwiperSlide>
              );
            })
          : activeTab === 3
          ? curated.reverse().map((product) => {
              return (
                <SwiperSlide className="box-border" key={product.title}>
                  <ProductCard el={product} />{" "}
                </SwiperSlide>
              );
            })
          : null}
      </Swiper>
    </div>
  );
};

export default QuickProducts;
