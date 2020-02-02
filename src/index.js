import React from "react";
import ReactDOM from "react-dom";
import FacContainer from './Containers/faq'
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="faq-container">
        <FacContainer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
