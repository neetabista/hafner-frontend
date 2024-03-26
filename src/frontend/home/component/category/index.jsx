import React from "react";
import Title from "../../../../components/common/Title";
import { Col, Container, Row } from "react-bootstrap";
import { categoryCard } from "../../../../data/data";
import CustomCard from "../../../../components/common/CustomCard";

const Category = () => {
  return (
    <>
      <div className="category-page section">
        <Container>
          <div className="category__wrap">
            <Title title="Hafner Range of Products" textAlign="center" />
            <Row>
              {categoryCard.map((category, index) => (
                <Col
                  xl={3}
                  lg={3}
                  md={4}
                  xs={6}
                  key={index}
                  className="mt-3 mb-3"
                >
                  <CustomCard data={category} />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Category;
