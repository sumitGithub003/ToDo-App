import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App";
import "./index.css"
ReactDOM.render(
  <>
<App />
  </>,
  document.getElementById("root")
)
// const arr = ['sumit', 'verma', 'kumar', 'jee', 'yadav', 'kumar']
// const biod = [1, 23, 'male', ...arr]
// const [first, ...remaining] = arr; 
// console.log(first)
// console.log(remaining)
const name ={
  fname : 'sumit',
  lname : 'verma',
}
const bio = {
  id : 1,
  ...name,
  age : 23,
  gender : 'Male',
}
console.log(bio)

