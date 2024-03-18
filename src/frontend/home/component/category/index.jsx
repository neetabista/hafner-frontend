import React from "react";
import Title from "../../../../components/common/Title";
import { Col, Container, Row } from "react-bootstrap";
import { categoryCard } from "../../../../data/data";
import CustomCard from "../../../../components/common/CustomCard";

const Category = () => {
  return (
    <>
      <div className="category ">
        <div
          className="category__bg--image section"
          style={{ backgroundImage: `url("/images/kitchen.jpg")` }}
        >
          <Container>
            <div className="category__wrap">
              <Title
                title="Hafner Range of Products"
                color="#ffffff"
                textAlign="center"
                icon="/public/images/icon-light.svg"
              />
              <Row>
                {categoryCard.map((category, index) => (
                  <Col lg={3} key={index} className="mt-3 mb-3">
                    <CustomCard data={category} />
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Category;
