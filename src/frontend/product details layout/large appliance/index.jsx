import React from "react";
import CustomBreadcrumb from "../../../components/common/CumtomBreadcrumb";
import CustomCard from "../../../components/common/CustomCard";
import { chimneys, technology } from "../../../data/data";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../../../components/common/Title";
import CustomBlock from "../../product details layout/components/CustomBlock";
import { chimneyProductsAboutData } from "../../../data/data";
import TechnologyCard from "../components/TechnologyCard";

const LargeAppliance = () => {
  return (
    <>
      <CustomBreadcrumb
        title="Kitchen Hoods & Chimneys"
        subtitle="Kitchen Hoods & Chimneys"
      />
      <CustomBlock data={chimneyProductsAboutData} />

      <div className="appliance-product section">
        <Container>
          <Title title="Product" textAlign="center" />
          <Row>
            {chimneys.map((data, index) => (
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
                  // boxShadow="0px 6px 35px 0px rgba(0, 0, 0, 0.06)"
                  boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <Container>
        <div className="technology section">
          <Title title="technology" />

          <Row>
            {technology.map((data, index) => (
              <Col xl={3} lg={3} md={4} xs={6} key={index}>
                <TechnologyCard data={data} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default LargeAppliance;
