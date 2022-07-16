import React, { Component, useState } from "react";
import Heading from "./component/Heading.js"
import SubHeading from "./component/SubHeading.js"
import InputQuery from "./component/InputQuery.js"
import SubmitButton from "./component/SubmitButton.js"
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


