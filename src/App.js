import "./App.css";
import React, { Component }  from 'react';
import "./index.css";
import { Route, Swtich } from "react-router-dom";
import Main from "./Components/Main";

function App() {
  const URL = "https://never-bored-couple-backend.herokuapp.com/"
  return(
    <div className="App">
      <Swtich>
        <Route exact path="/">
          <Main />
        </Route>
      </Swtich>
    </div>
  );
}

export default App;
