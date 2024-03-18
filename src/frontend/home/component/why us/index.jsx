import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../../../../components/common/Title";

const WhyUs = () => {
  return (
    <>
      <Container>
        <div className="why-us section">
          <Title title="why hafner ?" textAlign="center" />
          <Row>
            <Col lg="3">
              <div className="left">
                <ul className="why__list">
                  <li className="why__item">
                    <img
                      src="/public/images/check-box.svg"
                      alt="check"
                      width="100%"
                      height="100%"
                    />
                    <span>High Quality Material</span>
                  </li>
                  <li className="why__item">
                    <img
                      src="/public/images/check-box.svg"
                      alt="check"
                      width="100%"
                      height="100%"
                    />
                    <span>Small Appliance</span>
                  </li>
                  <li className="why__item">
                    <img
                      src="/public/images/check-box.svg"
                      alt="check"
                      width="100%"
                      height="100%"
                    />
                    <span>Airtight and Spill Resistant</span>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg="6">
              <div className="center">
                <img
                  src="/public/images/kit.png"
                  alt="kit"
                  width="100%"
                  height="100%"
                />
              </div>
            </Col>
            <Col lg="3">
              <div className="right">
                <ul className="why__list">
                  <li className="why__item">
                    <img
                      src="/public/images/check-box.svg"
                      alt="check"
                      width="100%"
                      height="100%"
                    />
                    <span>Large Appliance</span>
                  </li>
                  <li className="why__item">
                    <img
                      src="/public/images/check-box.svg"
                      alt="check"
                      width="100%"
                      height="100%"
                    />
                    <span>Small Appliance</span>
                  </li>
                  <li className="why__item">
                    <img
                      src="/public/images/check-box.svg"
                      alt="check"
                      width="100%"
                      height="100%"
                    />
                    <span>Water purifier</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default WhyUs;
