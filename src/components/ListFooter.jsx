import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

const Container = styled(ListItem)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 16px 8px;
`;

const Count = styled.span`
  font-size: 0.875rem;
  font-weight: 100;
`;

export default function ListFooter(props) {
  const { children, ...rest } = props;
  return <Container {...rest}>{children}</Container>;
}
