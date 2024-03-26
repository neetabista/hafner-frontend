import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../../../../components/common/Title";
import Accordion from "react-bootstrap/Accordion";
import { productFeaturesData } from "../../../../data/data";

const CustomBlock = ({ data, features }) => {
  return (
    <>
      <div className="block section">
        <Container>
          <Row>
            <Col lg={5}>
              <div className="block__image">
                <img src={data.image} width="100%" height="100%" alt="hafner" />
              </div>
            </Col>
            <Col lg={7}>
              <div className="block__content">
                <Title
                  title={data.title}
                  display="inline-block"
                  icon="/public/images/icon-half.svg"
                />
                <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
              </div>

              {features && (
                <div className="features">
                  <Accordion>
                    {productFeaturesData.map((data, index) => (
                      <Accordion.Item eventKey={data.id} key={index}>
                        <Accordion.Header>{data.title}</Accordion.Header>
                        <Accordion.Body>{data.description}</Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CustomBlock;
