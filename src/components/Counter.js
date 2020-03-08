import React, { Component } from 'react'

class Counter extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            count : 0
        }
    }

    incrementCount() {
        // Never DO as below
        // this.state.count = this.state.count +1;  
        // console.log(this.state.count);

        // Always use setState() 
        // this.setState({
        //     count : this.state.count +1
        // }, () => {console.log("From Call back : "+this.state.count);});
        // console.log(this.state.count); 

        this.setState(prevState => ({
            count : prevState.count + 1
        }));

    }

    incrementFive() {
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }
    

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick = {() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
