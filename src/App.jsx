import React from "react";
import ReactDOM from "react-dom";
import StudentForm from "student_app_1/StudentForm";
import "./index.css";

const App = () => (
  <div className="container">
    <StudentForm/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));