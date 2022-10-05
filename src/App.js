import "./App.css";
import React, { Component }  from 'react';
import "./index.css";
import { Route, Switch } from "react-router-dom";
import Main from "./Components/Main";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

function App() {
  const URL = "https://never-bored-couple-backend.herokuapp.com/"
  const { token, setToken} = React.useState();

  if(!token){
    return <SignIn setToken={setToken} URL={URL} />
  }

  return(
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main URL={URL} />
        </Route>
        <Route exact path="/signin">
          <SignIn URL={URL}/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
