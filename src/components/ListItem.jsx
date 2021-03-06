import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
  padding: 16px;
`;

/**
 * Props - Any HTML attributes supported by li
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li
 */
export default function ListItem(props) {
  const { children, ...rest } = props;
  return <Container {...rest}>{children}</Container>;
}
