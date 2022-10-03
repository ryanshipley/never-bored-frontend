import React from 'react';
import NAV from "./components/Nav";

function Profile(props){
    return (
    <div className="Profile">
        <NAV/>
        <h1>Profile Page</h1>;
        <img src={user.image} />
        <h3>About Us: {user.about}</h3>
    </div>
    );
};

export default Profile;