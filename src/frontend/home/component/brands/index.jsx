import React from "react";
import Title from "../../../../components/common/Title";
import { Col, Container, Row } from "react-bootstrap";
import { brands } from "../../../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

const Brands = () => {
  return (
    <>
      <Container>
        <div className="brands">
          <Title
            title="brands"
            icon="/images/title_shape.svg"
            subTitle="brands"
            textAlign="center"
          />
          <div className="brands__box">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {brands.map((brand, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="brands__image"
                    src={brand.image}
                    alt="image"
                    width="100%"
                    height="100%"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Brands;
