import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
  margin: 0;
  padding: 0;
`;

export default function List(props) {
  return <StyledList>{props.children}</StyledList>;
}
