import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

import ListItem from "./ListItem";

const DeleteButton = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 100%;
  border: none;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  justify-content: center;
  outline: none;

  padding: 4px;

  &:hover {
    background: #f5f5f5;
  }
`;

const TodoListItem = styled(ListItem)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-right: 24px;
  min-height: 56px;
`;

/**
 * Props
 * todo
 * onRemove(todo): void
 */
export default function Todo(props) {
  const [showRemove, setShowRemove] = React.useState(false);

  return (
    <TodoListItem
      onMouseEnter={() => setShowRemove(true)}
      onMouseLeave={() => setShowRemove(false)}
    >
      {props.todo.label}
      {showRemove && (
        <DeleteButton onClick={() => props.onRemove(props.todo)}>
          <AiOutlineClose />
        </DeleteButton>
      )}
    </TodoListItem>
  );
}
