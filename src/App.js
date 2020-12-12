import React from "react";
import "./App.css";
import Routes from "./routes/routes";
import "antd/dist/antd.css";


function App() {
  const username = localStorage.getItem("username");
  console.log(username)
  return (
      <div className="App">
        <Routes />
      </div>
  );
}

export default App;
