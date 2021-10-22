import React from "react";
import styled from "styled-components";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

import ListItem from "./ListItem";

const Button = styled.button`
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

const CheckMarkButton = styled(Button)`
  border: 1px solid #e6e6e6;
  color: green;
  font-size: 20px;
  height: 40px;
  width: 40px;
  margin-right: 24px;
  padding: 0;

  &:hover {
    background: transparent;
  }
`;

const TodoListItem = styled(ListItem)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-right: 24px;
  min-height: 56px;
`;

const Text = styled.span`
  color: ${(props) => (props.completed ? "#e6e6e6" : "#000")};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  transition: all 500ms ease-in;
`;

const Group = styled.div`
  align-items: center;
  display: flex;
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
      <Group>
        <CheckMarkButton
          onClick={() =>
            props.onCompleted(props.todo.id, !props.todo.completed)
          }
        >
          {props.todo.completed && <AiOutlineCheck />}
        </CheckMarkButton>
        <Text completed={props.todo.completed}>{props.todo.label}</Text>
      </Group>
      {showRemove && (
        <Button onClick={() => props.onRemove(props.todo)}>
          <AiOutlineClose />
        </Button>
      )}
    </TodoListItem>
  );
}
