import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: none;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  outline: none;

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #e6e6e6;
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    font-style: italic;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: #e6e6e6;
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    font-style: italic;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: #e6e6e6;
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    font-style: italic;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: #e6e6e6;
    font-family: "Roboto", sans-serif;
    font-weight: 100;
    font-style: italic;
  }
`;

/**
 * Props
 * placeholder string
 * value string
 * onChange(string): void
 */
export default function Input(props) {
  const onEnter = (evt) => {
    if (evt.keyCode === 13) {
      props.onEnter(evt);
    }
  };

  return (
    <StyledInput
      placeholder={props.placeholder}
      value={props.value}
      onChange={(evt) => props.onChange(evt.target.value)}
      onKeyDown={onEnter}
    />
  );
}
