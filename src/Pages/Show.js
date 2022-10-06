import React from 'react'
import { useState, } from 'react'

function Show (props) {

    const id = props.match.params.id;
    const activities = props.activities;
    // _id is coming from our backend/database MongoDb
    const activity = activities.find(p => p._id === id);
    console.log(activity)
    // state for form
    // const [ editForm, setEditForm ] = useState(activity);

    // //handleChange function for form 
    // const handleChange = event => {
    //   setEditForm({ ...editForm, [event.target.name]: event.target.value});
    //   console.log(setEditForm)
    // };
    
    // // handleSubmit for form
    // const handleSubmit = event => {
    //   event.preventDefault();
    //   props.updateActivities(editForm, activity._id);
    //   // redirect back to index
    //   props.history.push("/");
    //   console.log(editForm)
    // }

  return (
    <div className="activity">
        <h1>{activity.activityName}</h1>
        <h2>{activity.type}</h2>
        <h2>{activity.accesibility}</h2>
        <h2>{activity.description}</h2>
        <img src={activity.image} alt={activity.name} />
        {/* <form onSubmit={handleSubmit}>
          <input
              type="text"
              value={editForm.name}
              name="name"
              placeholder="name"
              onChange={handleChange}
            />
          <input
              type="text"
              value={editForm.type}
              name="name"
              placeholder="name"
              onChange={handleChange}
            />
          <input
              type="text"
              value={editForm.accesibility}
              name="name"
              placeholder="name"
              onChange={handleChange}
            />
          <input
              type="text"
              value={editForm.image}
              name="name"
              placeholder="image URL"
              onChange={handleChange}
            />
            <input type="submit" value="Update Activity" />
        </form> */}
    </div>
  )
}

export default Show;