import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count:0
    };
  }

       increment() {
//     this.setState(
//       {
//         count: this.state.count + 1,
//       },
//       () => {
//         console.log("Callback value", this.state.count);
//       }
//     )
        this.setState((prevState)=>({
            count:prevState.count+1
        }))
  }

  incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
}
  render() {
    return (
        <div>
            <div>Count - {this.state.count}</div>
            <button onClick={()=>this.increment()}>Increment</button>
        </div>
    )
  }
}

export default Counter;

/*
setState
Always make use of setState and never modify the state directly

Code has to be executed after the state has been updated? Place that code 
call back function which is the second argument to the setState method.

When you have to update state based on the previous state value,
pass in a function as an argument instead of regular object.

*/
