/* 

Props is just an object that contains the attributes
and their values have passed from the parent component
so if you want to display the name that has been passed 
so you need to use {props.name }
Their value cannot be changed 
*/

import React, { Component } from "react";

const Props = () => {
  return (
    <div>
      <Welcome name="Jatin" age="20">
        <p>This is children props</p>
      </Welcome>
      <Welcome name="Priya" age="21" >
        <button>Action</button>
      </Welcome>
      <Welcome name="Nurender" age="23" />
      <ClassComponents name="Vishal" age="21"/>
    </div>
  );
};


const Welcome = (props) => {
    return (
        <div>
      <h1>Hi...{props.name} {props.age}</h1>
      {props.children}
    </div>
  );
};

/* 
Props with Class components 
Basically you're accessing the props with this keyword 
*/
class ClassComponents extends Component{
    render(){
        return(
            <h1>Class Component Props {this.props.name} a.k.a {this.props.age}</h1>
        )
    }
}

export default Props;
