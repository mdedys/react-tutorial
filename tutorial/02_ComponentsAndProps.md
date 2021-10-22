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

## Events

Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.

```javascript
function onClickActivate(evt) {...}
<button onClick={onClickActivate}>Activate Lasers </button>

// Passes custom value to function
function onClickActivate(activated) {...}
<button onClick={() => onClickActivate(true)}>Activate Lasers </button>
```

## Pass data between Children + Parents

Many times you need to pass data between child and parent. Passing data to children is simple and done through Props as explained above. To pass data back up to a parent, the best approach is too pass a function as a prop that can be called by the child component. This allows the child component to call this function and pass the neceassry data required. This is very common when you have multiple children who share some piece of data that is stored at the parent.

```javascript
function Parent() {
  const [state, setState] = React.useState("value")

  const onClick = (data) => setState(data)

  return (
    <div>
      <Child1 onClick={onClick} />
      <Child2 onClick={onClick} />
    </div>
  )
}

function Child1(props) {
  return <button onClick={() => props.onClick("One")}>Click One</button>
}

function Child2(props) {
  return <button onClick={() => props.onClick("Two")}>Click Two</button>
}
```
