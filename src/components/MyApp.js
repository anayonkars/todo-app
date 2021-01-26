import React, { Component } from "react";
import MyContent from "./MyContent";
import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";

function MyApp() {
  return (
    <div>
      <MyHeader />
      <MyContent />
      <MyFooter />
    </div>
  );
}

export default MyApp;
