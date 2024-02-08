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
      {props.reviews.map((review, index) => {
        return (
          <SwiperSlide key={index}>
            <div>
              <img
                src={review.reviewsContent.featuredImage.sourceUrl}
                alt={review.title}
              />
            </div>
            <div>
              <h3>{review.title}</h3>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ReviewSlider;
