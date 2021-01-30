import React, { Component } from "react";

class MyGreeting extends Component {
  render() {
    const { firstName, lastName } = this.props;
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours > 12 && hours < 17) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "night";
    }
    return (
      <div>
        <h1 style={{ color: "#FF8C00", backgroundColor: "#FF2D00" }}>
          Good {timeOfDay}, {`${firstName} ${lastName}`}
        </h1>
        <h3>It is currently about {date.getHours() % 12} o'clock </h3>
      </div>
    );
  }
}

export default MyGreeting;
