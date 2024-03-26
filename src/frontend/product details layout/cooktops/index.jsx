import React from "react";
import CustomBreadcrumb from "../../../components/common/CumtomBreadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import {
  cookTOps,
  cookTopsAboutData,
  cookTopsTechnology,
  technology,
} from "../../../data/data";
import TechnologyCard from "../components/TechnologyCard";
import CustomCard from "../../../components/common/CustomCard";
import CustomBlock from "../components/CustomBlock";
import Title from "../../../components/common/Title";

const CookTops = () => {
  return (
    <>
      <CustomBreadcrumb title="cooktops" subtitle="cooktops" />
      <CustomBlock data={cookTopsAboutData} title="Hafner’s cooktops" />

      <div className="appliance-product section">
        <Container>
          <Title title="Product" textAlign="center" />
          <Row>
            {cookTOps.map((data, index) => (
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
      <Container>
        <div className="technology section">
          <Title title="technology" />

          <Row>
            {cookTopsTechnology.map((data, index) => (
              <Col xl={3} lg={3} md={4} xs={6} key={index} className="mb-4">
                <TechnologyCard
                  data={data}
                  description="#"
                  padding=" 20px 20px 5px 20px"
                  textAlign="start"
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default CookTops;
