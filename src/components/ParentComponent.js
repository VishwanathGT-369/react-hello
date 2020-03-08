import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {

    constructor(props) {
        super(props)
    

    }

    parentMethod(childMsg) {
        alert("Hello " + childMsg)
    }
    

    render() {
        return (
            <div>
                <ChildComponent parentEvent={this.parentMethod}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent
