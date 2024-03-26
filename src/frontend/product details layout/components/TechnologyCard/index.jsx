import React from "react";
import Accordion from "react-bootstrap/Accordion";

const TechnologyCard = ({ data, description, padding, textAlign }) => {
  return (
    <>
      <div className="technology__card">
        <div className="technology__card--image" style={{ padding }}>
          <img src={data.image} width="100%" height="100%" alt={data.title} />
        </div>
        <div className="technology__content">
          {description ? (
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div className="title-section">
                    <h3 className="technology__title" style={{ textAlign }}>
                      {data.title}
                    </h3>
                    <i className="ri-add-line"></i>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  Hafner presents cooktops which are equipped with forged brass
                  burners. The brass metal gives it a beautiful antique gold
                  look and makes it corrosion resistant. Forging uses
                  compressive forces which makes its products tougher than
                  casted ones. The forging process makes the flame regulated and
                  consistent so that, the food is cooked evenly at a quicker
                  speed.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ) : (
            <div className="title-section">
              <h3 className="technology__title" style={{ textAlign }}>
                {data.title}
              </h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TechnologyCard;
