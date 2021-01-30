import React, {Component} from 'react';

class MyGreeting extends Component {
    render() {
        return <h1>Hello, {this.props.firstName + " " + this.props.lastName}</h1>
    }
}

export default MyGreeting;