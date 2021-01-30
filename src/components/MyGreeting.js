import React, { Component } from "react";

class MyGreeting extends Component {
  render() {
    const { firstName, lastName } = this.props;
    const date = new Date();
    return (
      <div>
        <h1>Hello, {`${firstName} ${lastName}`}</h1>
        <h3>It is currently about {date.getHours() % 12} o'clock </h3>
      </div>
    );
  }
}

export default MyGreeting;
