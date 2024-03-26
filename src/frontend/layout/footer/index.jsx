import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer ">
        <Container>
          <div className="footer__inner section">
            <Row>
              <Col lg={3} md={6} sm={12}>
                <div className="footer__block">
                  <h3 className="footer__title">About Hafner</h3>
                  <ul className="footer__list">
                    <li className="footer__item">
                      <Link to="#">Why hafner</Link>
                    </li>
                    <li className="footer__item">
                      <Link to="#">Mission & Vision</Link>
                    </li>

                    <li className="footer__item">
                      <Link to="#">blog</Link>
                    </li>
                    <li className="footer__item">
                      <Link to="#">delear enquiry </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <div className="footer__block">
                  <h3 className="footer__title">Our Products</h3>
                  <ul className="footer__list">
                    <li className="footer__item">
                      <Link to="#">Kitchen Hoods & Chimneys</Link>
                    </li>
                    <li className="footer__item">
                      <Link to="#">Cooktops</Link>
                    </li>
                    <li className="footer__item">
                      <Link to="#">Kitchen Sink</Link>
                    </li>
                    <li className="footer__item">
                      <Link to="#">Built-in-Hobs</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <div className="footer__block">
                  <h3 className="footer__title">useful links</h3>
                  <ul className="footer__list">
                    <li className="footer__item">
                      <Link to="#">offer</Link>
                    </li>
                    <li className="footer__item">
                      <Link to="#">FAQ</Link>
                    </li>
                    <li className="footer__item">
                      <Link to="#">survices and warranty</Link>
                    </li>

                    <li className="footer__item">
                      <Link to="#"> company policy</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <div className="footer__block">
                  <h3 className="footer__title">Contact us</h3>
                  <ul className="footer__info footer__list">
                    <li className="footer__info--item footer__item">
                      <img
                        src="/public/images/telephone.svg"
                        alt="telephone"
                        width="100%"
                        height="100%"
                      />
                      <Link to="#">012046068287</Link>
                    </li>
                    <li className="footer__info--item footer__item">
                      <img
                        src="/public/images/email.svg"
                        alt="email"
                        width="100%"
                        height="100%"
                      />
                      <Link to="#">Info@hafner.co.in</Link>
                    </li>
                    <li className="footer__info--item footer__item">
                      <img
                        src="/public/images/location.svg"
                        alt="location"
                        width="100%"
                        height="100%"
                      />
                      <span className="address">
                        A 1502, Arihant Tower, Greater Noida , Uttar
                        Pradesh-201306, India
                      </span>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="footer__bottom">
          <Container>
            <div className="bottom-list">
              <div className="footer__copyright">
                Copyright &copy; 2020 <span>Hafner</span>
              </div>
              <div className="footer__credit">
                Powered By:
                <Link to="https://infinityinfosys.com/" target="_blank">
                  <span>Infinity Infosys Pvt. Ltd.</span>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
