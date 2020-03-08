import React from 'react'

function FunctionalClick() {

    function funcClick() {
        console.log("Function Component Button clicked")
    };
    
    return (
        <div>
            Functional Component : <button onClick={funcClick}>Click Me</button>
        </div>
    )
}

export default FunctionalClick
