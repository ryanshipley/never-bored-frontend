import { data } from "autoprefixer";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Show(props) {
  const [activities, setActivities] = useState(props.activities);

  useEffect(() => {
    if (activities) {
      localStorage.setItem("activities", JSON.stringify(activities));
    } else {
      const dataFromStorage = localStorage.getItem("activities");
      setActivities(JSON.parse(dataFromStorage));
    }
  });

  if (activities) {
    // _id is coming from our backend/database MongoDb
    const id = props.match.params.id;

    const activity = activities.find((p) => p._id === id);

    const dataDiv = activity ? (
      <div className="show-data">
        <h1>{activity.activityName}</h1>
        <h2>{activity.type}</h2>
        <h2>{activity.accesibility}</h2>
        <h2>{activity.description}</h2>
        <img src={activity.image} alt={activity.name} />
      </div>
    ) : (
      <div className="show-data"></div>
    );

    return <div id="show-page">{dataDiv}</div>;
  } else {
    return(
      <div id="show-page-error-div">
        <h2>Error Loading Activity Page</h2>
        <Link to="/"><button>Return to Home</button></Link>
      </div>
    )
  }
}

export default Show;
