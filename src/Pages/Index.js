import { useState } from "react";
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

const Index = (props) => {
    const [newForm, setNewForm] = useState({ 
   activityName: "",
   accessability: "",
   description: "",
   type: "",
});

//handleChange function for form
const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value});
};


const handleSubmit = (event) => {
    event.preventDefault();
    props.createActivities(newForm);
    setNewForm({
        activityName: "",
        accessability: "",
        description: "",
        type: "",
    });
};

// loaded function
const loaded = () => {
    return props.activities.map((activity) => (
        <div 
        key={activity._id} 
        className="activity">
        <Link to={`/couples/activityPage/${activity._id}`}>
            <h1>{activity.activityName}</h1>
        </Link>
        </div>
    ));
};

const loading = () => {
    return <h1>Loading...</h1>
};

return (
    <div className="index">
        <div className="container">
        <h1>Create new</h1>
        <section>
            <div className="form-group">
        <form onSubmit={handleSubmit}>
            <label for ="activity">Pick an Activity</label>
            <input
            className="form-control" 
            type="text"
            value={newForm.activityName}
            name="activityName"
            onChange={handleChange}
            />
            <label for ="accessability">Accessability</label>
            <input
            className="form-control"
            type="text"
            value={newForm.accessability}
            name="accessability"
            onChange={handleChange}
            />
            <label for ="description">Description</label>
            <input
            className="form-control"
            type="text"
            value={newForm.description}
            name="description"
            onChange={handleChange}
            />
            <label for ="type">What Type of Activity</label>
            <input
            className="form-control"
            type="text"
            value={newForm.type}
            name="type"
            onChange={handleChange}
            />
           <button className="btn btn-primary"> <input type="submit" value="Create Activity" /></button>
        </form>
        </div>
        {props.activities ? loaded() : loading()}
        </section>
        </div>
        </div>
);
}


export default Index;