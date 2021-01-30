import React, {Component} from 'react';

class MyGreeting extends Component {
    render() {
        const {
            firstName,
            lastName
        } = this.props;
        return <h1>Hello, {firstName + " " + lastName}</h1>
    }
}

export default MyGreeting;