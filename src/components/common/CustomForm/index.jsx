import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../CustomButton";

const CustomForm = () => {
  return (
    <>
      <form className="contact__form">
        <h2 className="contact__form--title">Get In Touch</h2>
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
          <Col lg={12}>
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
            title="submit"
            type="type"
            display="block"
            textAlign="center"
          />
        </Row>
      </form>
    </>
  );
};

export default CustomForm;
