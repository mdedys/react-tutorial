# Component and Props

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

## Function Component

Simplest Component:

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}
```

A React Component, accepts a *single* "props" (properties) object argument with data and returns a React element. 

React understands how to render elements `div`, `li`, ...etc (smallest building block). It can also render user-defined components. A user define component can be made up of any number of elements or user defined components. Eventually the lowest level component will define only html elements. 

When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// name will be available in Welcome under props objects --> props.name == "Sara"
const element = <Welcome name="Sara" />;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Complex user-defined component can be found [here](../src/App.js)

## Props

Props or Properties is the input that a component receives. Props are **READ ONLY**. A component must never modify its own props.

React is pretty flexible but it has a single strict rule:

> All React components must act like pure functions with respect to their props.

A pure function is a functions that do not change the inputs and always return the same result for the same inputs.
