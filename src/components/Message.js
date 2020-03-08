import React, { Component } from 'react';

class Welcome extends Component {

    constructor() {
        super();
        this.state = {
            message : "Welcome Visitor"
        }
    }

    changeMessage() {
        this.setState({
            message : "Thank you for Subscription"
        });
    }

    resetMessage() {
        this.setState({
            message : "Welcome Visitor"
        });
    }
 
    render() {
        return (
            <div>
                <h1>{this.state.message} {this.props.name}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
                <button onClick={() => this.resetMessage()}>Reset Messsage</button>
            </div>
        );
    }
}

export default Welcome;