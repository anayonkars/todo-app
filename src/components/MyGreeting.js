import React, { Component } from "react";

class MyGreeting extends Component {
  render() {
    const { firstName, lastName } = this.props;
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const styles = {
      fontSize: 30,
    };
    if (hours < 12) {
      timeOfDay = "morning";
      styles.color = "#04756F";
    } else if (hours > 12 && hours < 17) {
      timeOfDay = "afternoon";
      styles.color = "#2E0927";
    } else {
      timeOfDay = "night";
      styles.color = "#D90000";
    }
    return (
      <div>
        <h1 style={styles}>
          Good {timeOfDay}, {`${firstName} ${lastName}`}
        </h1>
        <h3>It is currently about {date.getHours() % 12} o'clock </h3>
      </div>
    );
  }
}

export default MyGreeting;
