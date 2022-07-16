import React, { Component, useState } from "react";
import Heading from "./Heading.js"
import SubHeading from "./SubHeading.js"
import InputQuery from "./InputQuery.js"
import SubmitButton from "./SubmitButton.js"
import '../styles/App.css';    

const App = () => {
  return (
    <div id="main">
      <Heading/>
      <SubHeading/>
      <InputQuery/>
      <SubmitButton/>
    </div>
  )
}
export default App;


