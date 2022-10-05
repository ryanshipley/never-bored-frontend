import React from "react";
import { useState, useEffect } from "react";

function SignIn(props){
    const [users, setUsers] = useState(null);
    const getUsersData = async() => {
        const response = await fetch(props.URL);
        const data = await response.json();
        setUsers(data);
    };

    useEffect(() => getUsersData(), []);

    const handleSubmit = (e) => {

    }

    return(
       <div className="signin">
        <form>
            <label>
                <p>Username</p>
                <input type="text" name="username"/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" name="password"/>
            </label>
        </form>
       </div>
    )
};

export default SignIn;