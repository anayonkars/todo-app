import React, { Component } from "react";
import MyHeader from "./MyHeader";

function MyApp() {
  return (
    <div>
      <MyHeader />
      <main>
        <p>My Content</p>
      </main>
      <footer>My Footer</footer>
    </div>
  );
}

export default MyApp;
