import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ReviewSlider = (props) => {
  console.log("PROPS", props);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <h3>1</h3>
      </SwiperSlide>
      <SwiperSlide>
        <h3>2</h3>
      </SwiperSlide>
      <SwiperSlide>
        <h3>3</h3>
      </SwiperSlide>
      <SwiperSlide>
        <h3>4</h3>
      </SwiperSlide>
      <SwiperSlide>
        <h3>5</h3>
      </SwiperSlide>
      <SwiperSlide>
        <h3>6</h3>
      </SwiperSlide>
    </Swiper>
  );
};

export default ReviewSlider;
