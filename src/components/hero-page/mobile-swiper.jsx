"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function MobileSwiper({ properties, PropertyCard }) {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={24}
      slidesPerView={1.2}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      className="w-full"
    >
      {properties.map((property) => (
        <SwiperSlide key={property.id}>
          <PropertyCard property={property} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
