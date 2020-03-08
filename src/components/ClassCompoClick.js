import React, { Component } from 'react'

export class ClassCompoClick extends Component {

    classClick() {
        console.log("Class Component Button clicked")
    }

    render() {
        return (
            <div>
                Class Component : <button onClick={this.classClick}>Click Me</button>
            </div>
        )
    }
}

export default ClassCompoClick
