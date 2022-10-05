import React from "react";
import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { ArrowLongDownIcon } from "@heroicons/react/24/outline";
//import './SignIn.css';

    async function SignInUser(credentials){
        return fetch("http://4000/login", {
            method: "POST",
            header:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        }).then(data => data.json())
    };

function SignIn({setToken}){

    const [username, setUserName] = useState();
    const [password, setPassword] =useState();
    // const [users, setUsers] = useState(null);
    // const getUsersData = async() => {
    //     const response = await fetch(props.URL);
    //     const data = await response.json();
    //     setUsers(data);
    // };

    // useEffect(() => getUsersData(), []);

    const handleSubmit = async e => {
        e.prevent.Default();
        const token = await SignInUser({
            username, password
        });
        setToken(token);
    }

    return(

       <div className="signin">
        <h1>Login In please, thank you</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <p>Username</p>
                <input type="text" name="username" onChange={event => setUserName(event.target.value)}/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" name="password" onChange={event => setPassword(event.target.value)}/>
            </label>
            <div>
            <button type="submit" value="Login">Submit</button>
            </div>
        </form>
       </div>
    )
        SignIn.propTypes = {
            setToken: PropTypes.func.isRequired
        }
};

export default SignIn;