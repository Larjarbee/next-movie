"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CategoryList from "@/components/shared/category-list";
import { Navigation } from "swiper/modules";

function List() {
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
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      modules={[Navigation]}
      className="mySwiper"
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((el) => (
        <SwiperSlide key={el}>
          <CategoryList />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default List;
