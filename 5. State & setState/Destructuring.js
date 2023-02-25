import { render } from "@testing-library/react";
import React, { Component } from "react";

// const Welcome = ({ name, age }) => {
const Welcome = (props) => {
  const { name, age } = props;
  return (
    <div>
      <h1>
        hello {name} {age}
      </h1>
    </div>
  );
};

// Class Components
class Greet extends Component {
  render() {
    const{name,lastName}=this.props
    // State
    // const {state1,state2} = this.state
    return <h1>Welcome {name} {lastName}</h1>;
  }
}
const Destructuring = () => {
  return (
    <div>
      <Welcome name="Jatin" age="12" />
      <Greet name="Jatin" lastName="Sharma" />
    </div>
  );
};
export default Destructuring;
