import React from "react";
import CustomBreadcrumb from "../../components/common/CumtomBreadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../../components/common/Title";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";
import { association } from "../../data/data";
import CustomForm from "../../components/common/CustomForm";
import Select from "react-select";
import CustomButton from "../../components/common/CustomButton";

const Association = () => {
  const options = [
    { value: "Chimney", label: "Chimney" },
    { value: "Hobs", label: "Hobs" },
    { value: "Cooktops", label: "Cooktops" },
    { value: "Dishwasher", label: "Dishwasher" },
  ];
  return (
    <>
      <CustomBreadcrumb title="Association" subtitle="associaton" />
      <div className="association section">
        <Container>
          <div className="association-logos">
            <Title title="association" />
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
              {association.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="logo">
                    <img
                      src={data.image}
                      alt="logo"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>

        <Container>
          <div className="association-form section">
            <h2 className="association-form--title">Get In Touch</h2>
            <Row>
              <Col lg={8}>
                <div className="left">
                  <h3 className="left__title"></h3>
                  <form className="form">
                    <Row>
                      <Col lg={6}>
                        <div className="form__group">
                          <i className="ri-user-3-line"></i>
                          <input
                            type="text"
                            name="your name"
                            id="name"
                            placeholder="Your Name"
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="form__group">
                          <i className="ri-mail-line"></i>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="form__group">
                          <i className="ri-phone-line"></i>
                          <input
                            type="number"
                            name="phone"
                            id="phone"
                            placeholder="Phone Number"
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="form__group">
                          <Select options={options} />
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="form__group">
                          <i className="ri-chat-1-line"></i>
                          <textarea
                            type="text"
                            name="message"
                            id="message"
                            placeholder="Message"
                            cols="30"
                            rows="3"
                          />
                        </div>
                      </Col>
                      <CustomButton
                        type="submit"
                        title="send message"
                        textAlign="center"
                      />
                    </Row>
                  </form>
                </div>
              </Col>
              <Col lg={4}>
                <div className="right"></div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Association;
