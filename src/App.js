import "./App.css";
import React, { Component, useEffect, useState }  from 'react';
import "./index.css";
import { Route, Switch } from "react-router-dom";
import Show from "./Pages/Show";
import Index from "./Pages/Index";


function App(props) {
  const [ activities, setActivities ] = useState(null);

  const URL = "https://never-bored-couple-backend.herokuapp.com/"

  const getActivities = async () => {
    const response = await fetch(URL + "couples/activityPage");
    const data = await response.json();
    setActivities(data);
  }

  const createActivities = async activity => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(activity),
    });
    getActivities();
  }

  useEffect(() => 
  {getActivities()}, []);

  return(
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Index activities={activities} createActivities={createActivities} />
        </Route>
        <Route 
          path="/couples/activityPage/:id" 
          render={rp => (
            <Show 
            activities={activities}
            {...rp}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
