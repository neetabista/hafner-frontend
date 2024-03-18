import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../../../../components/common/Title";
import { products } from "../../../../data/data";
import CustomCard from "../../../../components/common/CustomCard";

const Product = () => {
  return (
    <>
      <div className="product section">
        <Container>
          <div className="product__wrap">
            <Title title="Our Featured Product" textAlign="center" />
            <Row>
              {products.map((category, index) => (
                <Col lg={3} key={index} className="mt-3">
                  <CustomCard
                    data={category}
                    category={category.category}
                    textAlign="start"
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Product;
