import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../../../../components/common/Title";
import { Link } from "react-router-dom";
import CustomButton from "../../../../components/common/CustomButton";

const About = () => {
  return (
    <>
      <Container>
        <div className="about section">
          <Row>
            <Col lg={5}>
              <div className="about__image">
                <img
                  src="/images/about.png"
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
            </Col>
            <Col lg={7}>
              <div className="about__content">
                <Title
                  title="about us"
                  display="inline-block"
                  icon="/public/images/icon-half.svg"
                />
                <p className="about__description">
                  Hafner is a fastest growing kitchen appliances and cookware
                  brand in India. International standards of quality, wonderful
                  designs & constant innovation are the signs of Hafner.
                  Inspired by international aesthetic designs, our products will
                  transform your kitchen into a thing of beauty.
                </p>
                <div className="icons-section">
                  <div className="icon">
                    <img
                      src="/images/quality.svg"
                      width="100%"
                      height="100%"
                      alt=""
                    />
                    <h5 className="icon-title">Certified Quality</h5>
                  </div>
                  <div className="icon">
                    <img
                      src="/images/small-appliance.svg"
                      width="100%"
                      height="100%"
                      alt="appliance"
                    />
                    <h5 className="icon-title">Elegant Design</h5>
                  </div>
                  <div className="icon">
                    <img
                      src="/images/happy.svg"
                      width="100%"
                      height="100%"
                      alt="happy"
                    />
                    <h5 className="icon-title">Happy & Satiesfied Customer</h5>
                  </div>
                  <div className="icon">
                    <img
                      src="/images/global.svg"
                      width="100%"
                      height="100%"
                      alt="global"
                    />
                    <h5 className="icon-title">Global Presence</h5>
                  </div>
                </div>
                <CustomButton title="learn more" slug="/about-us" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default About;
