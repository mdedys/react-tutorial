# State and Lifecycle

So far we have only seen components that have static inputs. In the real world this is rarely the case. Usually we have to update a React component when new data is recieved or through some other dynamic source. This can be done manually through `ReactDOM.render` but that is not efficient nor does it allow us to build components that can manage their own state.

Clock
```javascript
function Clock(props) {
  return (
    <div>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
```

In this example, tick will run every second and update `Clock` with a new date. This component works but is missing one important detail. If this component were to be reused else where it would need to define another interval. Ideally a component should encapsulate implementation details. To implement this we need to add "state" to the clock component"

This can achieved two different ways
1. Covert to class component
2. Use useState react hook

In this tutorial we are going to be focused on functional components and hooks.

## Hooks

A hook is a javascript function that can "hook" into React state and lifecycle features from within a class component. They do not work in class components. Prior to hooks in order to use state or lifecycle features, one had to always use class components.

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

In this class component `this.state` is the component state. `componentDidMount` is the lifecycle function that triggers when a component mounts. Each second `tick` will be called and the `this.setState` will update the value of `date` and trigger the component to re-render. 

**Why Hooks?**

The drawback of class components is that it is hard to re-use or share state + lifecycle functions across different components. Hooks allow you tap into state and lifecycle functions and extract stateful logic from a component so it be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy.

**Rules of Hooks**

1. Only Call Hooks at the Top Level

This ensures that Hooks are called in the same order each time a component renders. This allows React to correctly preserve the state of Hooks between multiple `useState` and `useEffect` calls.

Explanation: https://reactjs.org/docs/hooks-rules.html#explanation

2. Only Call Hooks from React Functions

React offers built in hooks:
- useState
- useEffect
- useCallback
- useMemo
- useContext
- useReducer
- useref
  
One can also build their own.

### Clock example using hooks

```javascript
function Clock(props) {
  const [date, setDate] = React.useState(new Date())

  const tick = () => setDate(new Date())

  React.useEffect(() => {
    const ticker = setInterval(() => {
      tick()
    }, 1000)
    return () => clearInterval(ticker)
  }, [])

  return (
    <div>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```

## useState

Hook used to maintain and update state in a component. Returns a stateful value and a function to update it.

`const [state, setState] = useState(initialState)`

Unlike like in class components, setState in in useState hook does not merge objects during updates.

## useEffect

Hook that accepts a function that contains code that may contain mutations, subscriptions, loggins or timers and other side effects. These things are not allowed inside the main body of a function component (referred to React's render phase). Doing so will lead to bugs.

`useEffect` is the following lifecycle functions merged into one:
1. componentDidMount
2. componentDidUpdate
3. componentWillUnmount

```javascript

// Will only run on mount
useEffect(() => { ...work }, [])

// Will run work on unmount
useEffect(() => {
  ...work
  return () => { ...unmount logic }
}, [])

// Will run on every update
useEffect(() => { ...work }, [])

// Will run when dependency changes

useEffect(() => { ...work }, [depA, depB])
```

Homework:

1. Implement `Input.jsx` to update as a user types. 
2. Add a prop to `Input.jsx` that when `enter` key is pressed. The value of the input field is passed up to a parent component. Hint. Prop should be a function
