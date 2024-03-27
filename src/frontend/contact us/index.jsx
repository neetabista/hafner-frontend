import React from "react";
import CustomBreadcrumb from "../../components/common/CumtomBreadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import CustomForm from "../../components/common/CustomForm";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <CustomBreadcrumb title="contact us" subtitle="contact us" />
      <Container>
        <div className="contact section">
          <Row>
            <Col lg={5}>
              <div className="contact__info--section">
                <div className="contact__info--title--wrap">
                  <h3 className="contact__info--title">
                    Our Contact Information
                  </h3>
                  <p>
                    Have a inquiry or some feedback for us? Fill out the form
                    below to contact our team.
                  </p>
                </div>
                <div className="contact__info">
                  <div className="contact__info--icon">
                    <i className="ri-phone-line"></i>
                  </div>
                  <div className="media-body">
                    <h3 className="media-title">Phone Number</h3>
                    <span className="media-text">
                      Mobile: <Link to="#">+977 981-7929593</Link>
                    </span>
                  </div>
                </div>
                <div className="contact__info">
                  <div className="contact__info--icon">
                    <i class="ri-mail-line"></i>
                  </div>
                  <div className="media-body">
                    <h3 className="media-title">email</h3>

                    <span className="media-text">
                      Email: <Link to="#">info@hafnerappliances.com </Link>
                    </span>
                  </div>
                </div>
                <div className="contact__info">
                  <div className="contact__info--icon">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <div className="media-body">
                    <h3 className="media-title">Our Address</h3>
                    <span className="media-text">
                      Head Office : Sukrapath -5, Biratnagar, Nepal
                    </span>
                    <span className="media-text">
                      Branch Office : Battisputali Rammandir Marg, Kathmandu
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="conatct__map--section">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4047104561846!2d85.33697297453568!3d27.704788025606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ba3764e2cf%3A0xd904fab1dce1847c!2sHafner%20Nepal%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1711444670091!5m2!1sen!2snp"></iframe>
              </div>
            </Col>
          </Row>
          <div className="contact__form--section">
            <CustomForm />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ContactUs;
