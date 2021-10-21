import React from "react";
import ListItem from "./ListItem";

/**
 * Props
 * label
 */
export default function Todo(props) {
  return <ListItem>{props.label}</ListItem>;
}
