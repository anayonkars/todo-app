import React, { Component } from "react";

function MyInfo() {
  var vacactionSpots = ["Asia", "Europe", "America"];
  return (
    <React.Fragment>
      <h1>Anayonkar Shivalkar</h1>
      <p>Software Architect & Developer</p>
      <ul>
        {vacactionSpots.map((vacationSpot) => (
          <li>{vacationSpot}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default MyInfo;
