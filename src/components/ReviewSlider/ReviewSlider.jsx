import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./reviewSlider.scss";

const ReviewSlider = (props) => {
  console.log("PROPS", props);
  return (
    <div className="slide-section">
      <div className="slide-wrap">
        <div className="slider-title">
          <h2 className="hl-three hl-white slider-title__content">
            Notes From <span>The Trail</span>
          </h2>
        </div>
        <Swiper
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={25}
          freeMode={true}
          navigation={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 65,
            },
          }}
        >
          {props.reviews.map((review, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="slide-img">
                  <img
                    src={review.reviewsContent.featuredImage.sourceUrl}
                    alt={review.title}
                  />
                </div>
                <div className="slide-title">
                  <h3 className="hl-four hl-white">{review.title}</h3>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSlider;
