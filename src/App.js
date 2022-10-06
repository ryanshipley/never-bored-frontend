import "./App.css";
import React, { Component }  from 'react';
import "./index.css";
import { Route, Switch } from "react-router-dom";
import Main from "./Components/Main";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

function App() {
  const URL = "https://never-bored-couple-backend.herokuapp.com/"
  return(
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main URL={URL} />
        </Route>
        <Route exact path="/signin">
          <SignIn URL={URL}/>
        </Route>
        <Route exact path="/signup">
          <SignUp URL={URL}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
