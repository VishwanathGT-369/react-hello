import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.parentEvent('Child')}>Child Button</button>
        </div>
    )
}

export default ChildComponent
