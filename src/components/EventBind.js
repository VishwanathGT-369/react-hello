import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message : "Hello"
        }

        // this.clickEventHandler = this.clickEventHandler.bind(this); Third Approch: Preffered one
    }

    clickEventHandler() {
        this.setState({
            message : "good bye"
        });
    }
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                {/* <button onClick={this.clickEventHandler.bind(this)}>First Approch</button> */}
                {/* <button onClick={() => this.clickEventHandler()}>Second Approch</button> */}
                {/* <button onClick={() => this.clickEventHandler()}>Third Approch</button>  */}
                
            </div>
        )
    }
}

export default EventBind
