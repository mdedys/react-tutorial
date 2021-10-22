import React from "react";
import styled from "styled-components";
import Input from "./components/Input";
import List from "./components/List";
import ListItem from "./components/ListItem";
import Todo from "./components/Todo";
import ListFooter from "./components/ListFooter";

const View = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 620px;
  min-width: 320px;
  width: 100%;
`;

const Title = styled.h1`
  color: rgba(175, 47, 47, 0.15);
  font-size: 6.25rem;
  font-weight: 100;
  text-align: center;
`;

function App() {
  const [todos, setTodos] = React.useState([]);
  const [todoValue, setValue] = React.useState("");

  const onEnter = () => {
    setTodos([
      ...todos,
      { id: Math.random().toString(), label: todoValue, completed: false },
    ]);
    setValue("");
  };

  const onRemove = (todo) => {
    const next = todos.reduce((list, cur) => {
      if (cur.id !== todo.id) {
        list.push(cur);
      }
      return list;
    }, []);
    setTodos(next);
  };

  const onCompleted = (id, completed) => {
    const next = todos.reduce((list, cur) => {
      if (cur.id === id) {
        list.push({ ...cur, completed });
      } else {
        list.push(cur);
      }
      return list;
    }, []);
    setTodos(next);
  };

  return (
    <View className="view">
      <Content className="view content">
        <Title>todo</Title>
        <List>
          <ListItem key="input-field">
            <Input
              placeholder="What needs to be done"
              value={todoValue}
              onChange={(v) => setValue(v)}
              onEnter={onEnter}
            />
          </ListItem>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onRemove={onRemove}
              onCompleted={onCompleted}
            />
          ))}
          {todos.length > 0 && <ListFooter count={todos.length} />}
        </List>
      </Content>
    </View>
  );
}

export default App;
