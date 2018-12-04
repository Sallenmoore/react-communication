import React from "react";
import ReactDOM from "react-dom";
import Parent from "./components/Parent.js";

class App extends React.Component{
    render() {
        return (
            <Parent/>
        );
    }
}
ReactDOM.render(
      <App/>,
      document.getElementById('root')
);
