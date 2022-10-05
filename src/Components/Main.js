import React from 'react'
import { useEffect, useState} from 'react'
import { Route, Switch, Link } from "react-router-dom"


const Main = (props) => {

// const [couple, setCouple] = useState (null)

// const URL = 'https://never-bored-couple-backend.herokuapp.com/'

// const getCouple = async () => {
//   const response = await fetch(URL)
//   const data = await response.json();
//   setCouple(data)
// }

// const createCouple = async (person) =>{
//   // make post request to create people
//   await fetch(URL, {
//     method: "POST",
//     headers: {
//         "Content-Type": "Application/json",
//     },
//     body: JSON.stringify(person),
// });
// // update list of people
//   getCouple();
// }

// useEffect(() => {
//   getCouple();
// }, []);


  return( 
    <div className="Main">
  <h1>NeverBored Couples</h1>
  <img src="https://imgur.com/UmxUBos.png" alt="NeverBored" />
  <Link to="/login">
    <div>Login/SignIn</div>
  </Link>
  </div>
  )
}

export default Main;