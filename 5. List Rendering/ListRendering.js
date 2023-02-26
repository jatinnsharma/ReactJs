/*
    map method does is go over element in the array
    and apply a transformation specified in the function body


    var array1=[1,2,4,44];

    // pass a function to map
    const map1 = array1.map(x => x*2);

    console.log(map1);
    // expected output: Array[2,4,8,88]
*/

import React from "react";

const ListRendering = () => {
  const names = ["jatin", "virender", "nurender"];
  const nameList = names.map(name=><h3>{name}</h3>)
  return (
    <div>
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}

      {/*with map method */}
      {names.map(name => <h2>{name}</h2>)}
      {nameList}
    </div>
  );
};

export default ListRendering;
