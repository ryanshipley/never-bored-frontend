import React from "react";

function SignIn(props){
    const handleSubmit = (e) =>{
        e.preventDefault();
        let { un, ps } = document.forms[0];

        //Match user input.
        const userDat = data.find((user)=> user.username === un.value);
        
        //Cases for user input matching.
        if(userDat){
            if(userDat.password !== ps.value){
                <div>Password Does not match</div>
        }else if(userDat.password === ps.value){
            return true;
        }else if(userDat.username !== un.value){
            <div>Username Does not match</div>
        }else if(userDat.username === un.value){
            return true;
         };
        };
    };
    return(
        <section>
            <form onSubmit={handleSubmit}>
                <label>Username </label>
                <input
                type="text"
                name="un"
                placeholder="adminho"
                required/>
                <input
                type="password"
                nane="ps"
                placeholder="abc1234"
                required/>
                <input
                type="submit"
                value="Login"
                />
            </form>
        </section>
    )
};

export default SignIn;