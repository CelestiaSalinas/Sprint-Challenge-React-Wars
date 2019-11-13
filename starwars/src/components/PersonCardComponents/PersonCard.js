import React from "react";
import styled from "styled-components";

const DivStyle = styled.div`
  background-color: white;
  margin-left: 20vw;
  margin-right: 20vw;
  padding: 5px;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const H2Style = styled.h2`
  color: lightblue;
`;

const H3Style = styled.h3`
  color: slateblue;
`;

const ValueStyle = styled.h3`
  color: black;
`;

const PersonCard = props => {
  return (
    <DivStyle>
      <div className="person-list" key={props.name}>
        <H2Style>
          <h2>{props.name}</h2>
        </H2Style>
        <H3Style>
          <h3>
            Gender: <ValueStyle>{props.gender}</ValueStyle>
          </h3>
          <h3>
            Birth Year: <ValueStyle>{props.birth_year}</ValueStyle>
          </h3>
        </H3Style>
      </div>
    </DivStyle>
  );
};

export default PersonCard;
