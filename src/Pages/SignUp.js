import React from "react";
import { Link } from "react-router-dom";

function SignUp(props){
    const [ newForm, setNewForm ] = React.useState({
        name: "",
        email: "",
        image: "",
    });
    const handleChange = e =>{
        setNewForm({ ...newForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = e =>{
        e.preventDefault();
        props.createUser(newForm);
        setNewForm({
            name:"",
            email: "",
            image: "",
        });
    };
    
};

export default SignUp;