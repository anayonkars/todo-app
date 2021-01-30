import React, { Component } from "react";
import MyContent from "./MyContent";
import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";
import MyGreeting from "./MyGreeting";

function MyApp() {
  return (
    <div>
      <MyHeader />
      <MyGreeting firstName="Anayonkar" lastName="Shivalkar" />
      <MyContent />
      <MyFooter />
    </div>
  );
}

export default MyApp;
