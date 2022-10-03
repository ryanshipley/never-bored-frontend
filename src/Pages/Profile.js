import React from 'react';
import NAV from "./components/Nav";

function Profile(props){

    const [profile, setProfile] = React.useState(null);
    const URL = "";
    const getProfile = async()=>{
        const response = await fetch(URL);
        const data = await response.json();
        setProfile(data);
    };

    return (
    <div className="Profile">
        <NAV/>
        <Profile profile={profile}/>
    </div>
    );
};

export default Profile;