import React from "react";
import styled from "styled-components";

const PersonCard = props => {
  return (
    <div className="person-list" key={props.name}>
      <h2>Name: {props.name}</h2>
      <h3>Gender: {props.gender}</h3>
    </div>
  );
};

export default PersonCard;
