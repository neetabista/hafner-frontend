import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade } from "swiper/modules";
import { banners } from "../../../../data/data";

const Banner = () => {
  return (
    <>
      <h1 className="d-none">
        Hafner is a fastest growing kitchen appliances and cookware brand in
        India.
      </h1>
      <div className="banner">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, EffectFade]}
          className="mySwiper"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <div className="banner__image">
                <img
                  src={banner.image}
                  alt="chimney"
                  width="100%"
                  height="100%"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
