import React from "react";
import "./App.scss";

// Components
import Navbar from "./components/navbar/Navbar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}
export default App;
