import React from "react";
import "./style.css";
import WelcomeMessage from "./WelcomeMessage";
import SMSApp from "./SMSApp";
import Register from "./Register";

export default function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
        <a href="#" className="navbar-brand">
          React with Form Binding
        </a>
      </nav>

      <Register />
    </React.Fragment>
  );
}
