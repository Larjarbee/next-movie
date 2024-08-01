"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import TrendingList from "./trendingList";
import { apiKey, baseUrl } from "@/service";
import { TMovies } from "../../../types";
import { fetcher } from "@/service/fetcher";
import useSWR from "swr";
import Loading from "../shared/loading";

function Trending() {
  const { data, error, isLoading } = useSWR(
    `${baseUrl}/movie/upcoming?${apiKey}&language=en-US&append_to_response=videos`,
    fetcher
  );

  if (isLoading) {
    return <Loading />;
  }

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
