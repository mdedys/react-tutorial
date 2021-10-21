# Intro to React + Styled Components

## React

React is a Javascript library for building user interfaces. It is:
- Declarative
  -  React will efficiently update and render just the right components when your data changes. 
-  Component Based
   -  Intefaces are built as component that manage their own state. You can compose them to make complex UIs
   -  Component logic is written in Javascript instead of templates, you can easily pass rich data through your app and keep state out of DOM

### JSX

Consider: `const element = <h1>Hello, World</h1>`

This syntax is neither a string nor HTML. This is JSX and it is a extension to Javascript. JSX produces React components.

**Why JSX?**

React embraces that rendering logic is inherently coupled with other ui logic:
- how events are handled
- how state changes over time
- how data is prepared for display

Instead of separating technologies and putting markup(HTML) and logic(JavaScript) into separate files, React separates concerns with loosely coupled units called components. See [List](../src/components/List.jsx) or [List Item](../src/components/ListItem.jsx)

```javascript
function Element() {
  return <div>Hello</div>
}
```

Any valid JavaScript Expression can be put inside curly braces in JSX.

```javascript
function Element() {
  const name = "John"
  return <div>Hello, {name}</div>
}
```

HTML attributes can set in JSX. Ex. example `<input type="text" />`. One thing to remember here is that they follow camelCase format.

Ex. Regular HTML: `<div tab-index="1"></div>`, JSX --> `<div tabIndex="1"></div>`

Extened Reading: https://reactjs.org/docs/introducing-jsx.html

## Styled Components

Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!

`styled-components` is the result of wondering how we could enhance CSS for styling React component systems. By focusing on a single use case we managed to optimize the experience for developers as well as the output for end users.

TLDR; Styled components lets you define CSS using React Components

Example:

```javascript
import styled from "styled-components"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function Component() {
  return <Title>text</Title>
}
```

In this example we have created a `h1` HTML element and styled it using the template literal. `Title` is now a React Component the can be used anywhere in JSX

Extended Reading: https://styled-components.com/docs/basics#motivation
