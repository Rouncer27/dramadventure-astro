import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./sliderThreeImages.scss";

const SliderThreeImages = (props) => {
  return (
    <div className="three-slides">
      <div>
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
          centeredSlides={false}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {props.data.slides.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="slide-img">
                  <img src={image.image.sourceUrl} alt={``} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderThreeImages;
