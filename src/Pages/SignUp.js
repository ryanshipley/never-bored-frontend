import React from "react";

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
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={newForm.name}
                name="name"
                placeholder="name"
                onChange={handleChange}
                />
                <input
                type="text"
                value={newForm.email}
                name="email"
                placeholder="couples123@123.com"
                onChange={handleChange}
                />
                <input 
                type="text"
                value={newForm.image}
                name="image"
                placeholder="image"
                onChange={handleChange}
                />
                <input type="submit" value="Join Here" />
            </form>
        </section>
    );
};

export default SignUp;