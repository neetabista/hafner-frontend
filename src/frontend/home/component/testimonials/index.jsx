import React from "react";
import Title from "../../../../components/common/Title";
import { Col, Container, Row } from "react-bootstrap";
import { testimonialsData } from "../../../../data/data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
// import "swiper/css/navigation";

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials ">
        <div
          className="testimonials-bg--image section"
          style={{ backgroundImage: `url("/public/images/light bg-2.jpg")` }}
        >
          <Container>
            <div className="testimonials__wrap">
              <Row>
                <Col lg={5}>
                  <div className="testimonials__left">
                    <div className="testimonials__left--content">
                      <Title
                        title="What Our Customer Says"
                        color="#fffff"
                        display="inline-block"
                        icon="/public/images/icon-half.svg"
                      />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={7}>
                  <div className="testimonials__right">
                    <Swiper
                      spaceBetween={30}
                      centeredSlides={true}
                      autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                      }}
                      navigation={true}
                      modules={[Autoplay, FreeMode]}
                      className="mySwiper"
                    >
                      {testimonialsData.map((data, index) => (
                        <SwiperSlide key={index}>
                          <div className="testimonials__right--content">
                            <div className="testimonials__image">
                              <img
                                src={data.image}
                                alt="ravi"
                                width="100%"
                                height="100%"
                              />
                            </div>
                            <h3 className="testimonials__name">{data.name}</h3>
                            <sapn className="testimonials__desig">
                              {data.desig}
                            </sapn>
                            <p className="testimonials__text">{data.text}</p>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
