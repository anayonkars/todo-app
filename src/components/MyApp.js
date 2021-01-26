import React, { Component } from "react";
import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";

function MyApp() {
  return (
    <div>
      <MyHeader />
      <main>
        <p>My Content</p>
      </main>
      <MyFooter />
    </div>
  );
}

export default MyApp;
