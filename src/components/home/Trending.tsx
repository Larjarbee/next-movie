"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import TrendingList from "./trendingList";
import { fetchAPI } from "@/service";
import { TMovies } from "../../../types";

async function Trending() {
  const data = await fetchAPI("/trending/all/week?language=en-US");

  return (
    <div className="px-5 md:px-10 ">
      <Swiper
        spaceBetween={5}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data?.results?.map((movie: TMovies) => {
          return (
            <SwiperSlide key={movie.id}>
              <TrendingList {...(movie as TMovies)} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Trending;
