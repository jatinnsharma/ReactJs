import React from 'react'
// rendering of List in React?
// How map() works in React?
const Key = () => {
    const IPL=['RR','RCB','MI','RCB','RCB']
    const result=IPL.map((ipl,index)=><h1 key={index}>{ipl} index is {index}</h1>)
  return (
    <div>
        <h1>{result}</h1>
    </div>
  )
}

export default Key
