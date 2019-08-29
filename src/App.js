import React, { Component } from "react";
// import { connect } from "react-redux";

import "./App.css";
import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h1>Jotto!</h1>
        <Congrats success={true} />
        <GuessedWords
          guessedWords={[{ guessedWord: "trains", letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}

export default App;
