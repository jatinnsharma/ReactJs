import React from 'react'

const JSX =()=>{
    // with JSX
    // return (
    //     <div>
    //         <h2>Hello Jatin</h2>
    //     </div>
    // )


    // Without JSX
    return React.createElement(
        'div',
        {id:'JSX',className:'dummyClass'},
        React.createElement('h1',null,'Hello Jatin')
    )
}
