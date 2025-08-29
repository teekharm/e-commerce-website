"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop
      navigation={{
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
      }}
      autoplay={{ delay: 4000 }}
    >
      <SwiperSlide>
        <div className="bg-stone-950 w-full gap-5 flex h-125 lg:h-100 justify-center">
          <div className="flex flex-col  lg:flex-row gap-10 items-center p-7">
            <div className="flex flex-col items-center gap-5">
              <h1 className="text-white text-4xl text-center">
                Work at iStore <br></br> Your path, Your purpose <br></br>{" "}
                <span className="text-blue-500">join iStore today</span>
              </h1>
              <button className="py-2 px-5 bg-black text-white border-2 border-white rounded-md">
                Apply now
              </button>
            </div>
            <img
              src="/careers-hero.webp"
              className="w-140 self-center lg:w-180"
            ></img>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-full flex justify-center items-center">
        <div className="bg-gray-100 w-full h-125 lg:h-100 flex justify-center items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center text-center w-full gap-2 lg:gap-10 px-4 py-10">
            {/* Left section */}
            <div className="space-y-1 flex flex-col items-center">
              <img
                src="/MacBook_Pro.svg.png"
                alt="MacBook Pro"
                className="w-[11rem]"
              />
              <h2 className="text-3xl  lg:text-2xl font-extrabold">
                Blaze through work <br /> and play at school.
              </h2>
            </div>

            {/* Center image */}
            <img
              src="/MacBook-Air-M4.png"
              alt="MacBook Air"
              className="w-[30rem] lg:w-[32rem]"
            />

            {/* Right section (only on large screens) */}
            <div className="hidden lg:flex flex-col gap-3 items-center text-black text-center">
              <h2 className="text-2xl font-medium">
                Get free AirPods 4 <br /> with any MacBook*
              </h2>
              <p>
                Offer also includes FREE <br /> Office 365 + 24 months warranty.
              </p>
              <button className="px-4 py-2 rounded-md border-2 border-black">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="bg-gray-100 w-full h-125 lg:h-100">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 p-10">
            <div className="flex flex-col  gap-3 items-center">
              <h1 className="text-4xl font-extrabold text-center">
                Make your next <br></br>phone an iPhone
              </h1>
              <h1 className="text-2xl">Now available from</h1>
              <h1 className="text-5xl font-extrabold">N849 000</h1>

              <button className="px-4 py-2 rounded-md border-2 ">
                Shop now
              </button>
            </div>
            <div className="">
              <img src="/iPhone-13-PNG-Transparent.png" className="w-180 h-50 lg:w-210"></img>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <button className="next-btn bg-gray-100 absolute right-4  lg:block top-3/5 z-10 rounded-full p-3">
        <img src="/right arrow.png"></img>
      </button>
      <button className="prev-btn bg-gray-100 absolute left-4  lg:block top-3/5 z-10 rounded-full p-3">
        <img src="/icons8-left-arrow-24.png"></img>
      </button>
    </Swiper>
  );
}
