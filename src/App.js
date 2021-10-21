import React from "react";
import styled from "styled-components";
import Input from "./components/Input";
import List from "./components/List";
import ListItem from "./components/ListItem";

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
  return (
    <View className="view">
      <Content className="view content">
        <Title>todo</Title>
        <List>
          <ListItem>
            <Input placeholder="What needs to be done" />
          </ListItem>
        </List>
      </Content>
    </View>
  );
}

export default App;
