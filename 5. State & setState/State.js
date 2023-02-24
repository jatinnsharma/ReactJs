/*
    props Vs state

    props
    props get passed to the component 
    function parameters 
    props are immutable means cannot change
    props-functional Components
    this.props-Class Components 

    State 
    State is managed within the component
    Variables declared in the function body 
    state can be changed
    useState Hook-Function Components 
    this.state-Class Components

*/

import React, { Component } from "react";

class State extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }
  changeMessage(){
    this.setState({
        message:"Thank you for clicking"
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMessage()}>Click Here</button>
      </div>
    );
  }
}

export default State;
