import React from "react";
import CustomBreadcrumb from "../../../components/common/CumtomBreadcrumb";
import CustomCard from "../../../components/common/CustomCard";
import { electricKettelAboutData, kettles } from "../../../data/data";
import { Col, Container, Row } from "react-bootstrap";
import CustomBlock from "../components/CustomBlock";
import Title from "../../../components/common/Title";

const SmallAppliance = () => {
  return (
    <>
      <CustomBreadcrumb title="Electric Kettle" subtitle="Electric Kettle" />
      <CustomBlock data={electricKettelAboutData} features="#" />

      <div className="appliance-product section">
        <Container>
          <Title title="Product" textAlign="center" />
          <Row>
            {kettles.map((data, index) => (
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
        </Container>
      </div>
    </>
  );
};

export default SmallAppliance;
