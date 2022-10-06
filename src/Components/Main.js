import React from 'react'
import { useEffect, useState} from 'react'
import { Route, Switch, Link } from "react-router-dom"
import Index from '../Pages/Index'
import Show from '../Pages/Show'


const Main = (props) => {

const [activity, setActivity] = useState (null)

const URL = 'https://never-bored-couple-backend.herokuapp.com/'

const getActivity = async () => {
  const response = await fetch(URL)
  const data = await response.json();
  setActivity(data)
}

const createActivity = async (activity) =>{
  // make post request to create people
  await fetch(URL, {
    method: "POST",
    headers: {
        "Content-Type": "Application/json",
    },
    body: JSON.stringify(activity),
});
// update list of people
  getActivity();
}

useEffect(() => {
  getActivity();
}, []);


  return( 
    <div className="Main">
  <h1>NeverBored Couples</h1>
  <img src="https://imgur.com/UmxUBos.png" alt="NeverBored" />
  <Link to="/signin">
    <div>Login/SignIn</div>
  </Link>
  <Link to="/signup">
    <div>Sign up here</div>
  </Link>
  </div>
  )
}

export default Main;