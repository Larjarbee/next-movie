"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "../ui/button";
import ArrowRightIcon from "@/assets/svgs/arrow-right";
import { Navigation } from "swiper/modules";
import useSWR from "swr";
import { fetcher } from "@/service/fetcher";
import { apiKey, baseUrl } from "@/service";
import { TGenres } from "../../../types";
import CategoryList from "../shared/category-list";
import Loading from "../shared/loading";
import Link from "next/link";

function List() {
  const { data: movieList, isLoading } = useSWR(
    `${baseUrl}/genre/movie/list?${apiKey}&language=en`,
    fetcher
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
      navigation={{
        nextEl: ".button-next",
        prevEl: ".button-prev",
      }}
      modules={[Navigation]}
      className="mySwiper"
    >
      {movieList?.genres.map((el: TGenres) => (
        <SwiperSlide key={el?.id}>
          <div className="bg-Black-45 p-4 rounded-xl border border-Black-90">
            <CategoryList id={el?.id} />
            <div className="flex justify-between items-center">
              <h6>{el?.name}</h6>
              <Link href={`/movies/lists/${el?.id}`}>
                <Button size="icon" variant="ghost">
                  <ArrowRightIcon />
                </Button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default List;
