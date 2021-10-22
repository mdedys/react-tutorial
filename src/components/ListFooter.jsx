import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

const Container = styled(ListItem)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  min-height: 50px;
`;

const Count = styled.span`
  font-size: 0.875rem;
  font-weight: 100;
`;

const Group = styled.div`
  align-items: center;
  display: flex;
`;

const FilterButton = styled.button`
  background-color: #fff;
  border: ${(props) =>
    props.active
      ? "1px solid rgba(175, 47, 47, 0.15)"
      : "1px solid transparent"};
  border-radius: 4px;
  color: #4d4d4d;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  font-weight: 100;
  margin-right: 8px;

  &:hover {
    border: 1px solid rgba(175, 47, 47, 0.15);
  }
`;

/**
 * Props
 * count
 * filter
 * onClickFilter(filter): void
 */
export default function ListFooter(props) {
  return (
    <Container>
      <Count>{props.count} items left</Count>
      <Group>
        <FilterButton
          active={props.filter === "all"}
          onClick={() => props.onClickFilter("all")}
        >
          All
        </FilterButton>
        <FilterButton
          active={props.filter === "active"}
          onClick={() => props.onClickFilter("active")}
        >
          Active
        </FilterButton>
        <FilterButton
          active={props.filter === "completed"}
          onClick={() => props.onClickFilter("completed")}
        >
          Completed
        </FilterButton>
      </Group>
    </Container>
  );
}
