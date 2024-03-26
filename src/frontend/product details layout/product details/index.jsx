import React from "react";
import CustomBreadcrumb from "../../../components/common/CumtomBreadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { productInfoData, relatedProductData } from "../../../data/data";
import Title from "../../../components/common/Title";
import CustomCard from "../../../components/common/CustomCard";

const ProductDetails = () => {
  return (
    <>
      <CustomBreadcrumb title=" CROWN Plus" subtitle="CROWN Plus" />
      <Container>
        <div className="product-details section">
          <Row>
            <Col lg={5}>
              <div className="produt-image-section">
                <div className="product-image">
                  <img
                    src="/public/images/crown.jpg"
                    alt="crown"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="product-content">
                <h3 className="product-title">CROWN Plus</h3>
                <div className="product-meta">
                  <span className="category">
                    Category:
                    <Link to="#"> Kitchen Hoods & Chimneys</Link>
                  </span>
                </div>
                <div className="product-info-section">
                  <Tabs defaultActiveKey="description" id="my-tabs">
                    <Tab eventKey="description" title="description">
                      <p>{productInfoData.description}</p>
                    </Tab>
                    <Tab eventKey="Specifications" title="Specifications">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: productInfoData.Specifications,
                        }}
                      ></p>
                    </Tab>
                    <Tab eventKey="reviews" title="reviews">
                      <form className="form">
                        <div className="form__title--section">
                          <h3 className="form__title">
                            Be the first to review CROWN Plus
                          </h3>
                          <p>
                            Your email address will not be published. Required
                            fields are marked
                          </p>
                          <div className="rating">
                            Your rating
                            <p className="rating-icon">
                              <span>
                                <i className="ri-star-line"></i>
                              </span>
                              <span>
                                <i className="ri-star-line"></i>
                              </span>
                              <span>
                                <i className="ri-star-line"></i>
                              </span>
                              <span>
                                <i className="ri-star-line"></i>
                              </span>
                              <span>
                                <i className="ri-star-line"></i>
                              </span>
                            </p>
                          </div>
                        </div>
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
                              <i className="ri-chat-1-line"></i>
                              <textarea
                                type="text"
                                name="message"
                                id="message"
                                placeholder="Your review"
                                cols="30"
                                rows="3"
                              />
                            </div>
                          </Col>
                          <Col lg={12}>
                            <button className="submit-button" type="submit">
                              submit
                            </button>
                          </Col>
                        </Row>
                      </form>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <div className="related-product  section">
          <Title title="Related products" />
          <Row>
            {relatedProductData.map((data, index) => (
              <Col
                xl={3}
                lg={3}
                md={4}
                xs={6}
                key={index}
                className="mt-3 mb-3"
              >
                <CustomCard
                  data={data}
                  category={data.category}
                  textAlign="start"
                  boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default ProductDetails;
