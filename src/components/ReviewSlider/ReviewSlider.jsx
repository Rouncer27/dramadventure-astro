import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./reviewSlider.scss";

const settings = {
  slidesToShow: 2,
  slidesToScroll: 1,
  fade: false,
  draggable: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 15000,
  centerPadding: "200px",
  centerMode: true,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerPadding: "0px",
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ReviewSlider = (props) => {
  return (
    <div className="slide-section">
      <div className="slide-wrap">
        <div className="slider-title">
          <h2 className="hl-three hl-white slider-title__content">
            Notes From <span>The Trail</span>
          </h2>
        </div>

        <Slider className="slider" {...settings}>
          {props.reviews.map((review, index) => {
            return (
              <div key={index}>
                <div className="slide-img">
                  <img
                    src={review.reviewsContent.featuredImage.sourceUrl}
                    alt={review.title}
                  />
                </div>
                <div className="slide-title">
                  <h3 className="hl-four hl-white">{review.title}</h3>
                </div>
              </div>
            );
          })}
        </Slider>
        {/* {typeof Slider === "function" ? () : null} */}
      </div>
    </div>
  );
};

export default ReviewSlider;
