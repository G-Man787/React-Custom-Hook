Form custom hook

Project criteria 1

Create a custom hook useForm that will persist the state of all form controls in a single object:

const App = () => {
  const [formValues, handleChange] = useForm({ email: "", password: "" });

  return (
    <div>
      <input
        name="email"
        placeholder="email"
        value={formValues.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={formValues.password}
        onChange={handleChange}
      />
    </div>
  );
};
Project criteria 2

Convert the following App component from class-based component to function-based component
This React application re-renders MessageComponent every time the state changes, whether we changed the count or value. Persist the Application state by using useState().
import React, { Component } from "react";
import ReactDOM from "react-dom";

const MessageComponent = props => {
  console.log(`rendering MSG`);
  return <div>{props.message}</div>;
};

const CounterComponent = props => <strong>{props.count}</strong>;

class App extends Component {
  state = { count: 0, value: "my message goes here" };

  handleChange = e => this.setState({ value: e.target.value });
  handleClick = () => this.setState(({ count }) => ({ count: count + 1 }));

  render() {
    const { count, value } = this.state;

    return (
          <div>
            <CounterComponent count={count} />
        
            <button type="button" onClick={this.handleClick}>Increase Count</button>
            <input type="text" value={value} onChange={this.handleChange} />

            <MessageComponent message={value} />
          </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
Update the application and persist the state by using useContext().
Update the application so CounterComponent and MessageComponent will receive their count and message values from a global AppContext context object.
Update the application so MessageComponent will only renders when the state value is changed.
