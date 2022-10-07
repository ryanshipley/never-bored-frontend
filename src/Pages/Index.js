import { useState } from "react";
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

const Index = (props) => {
    const [newForm, setNewForm] = useState({ 
   activityName: "",
   accessibility: "",
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
        accessibility: "",
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
        <h1>Create new</h1>
        <section>
            <form onSubmit={handleSubmit}>
                <label htmlFor="activity-name-input">Pick an Activity</label>
                <input
                    id="activity-name-input"
                    className="form-control"
                    type="text"
                    value={newForm.activityName}
                    name="activityName"
                    onChange={handleChange}
                />
                <label htmlFor="accessibility-input">Accessability</label>
                <input
                    id="accessibility-input"
                    className="form-control"
                    type="text"
                    value={newForm.accessibility}
                    name="accessibility"
                    onChange={handleChange}
                />
                <label htmlFor="description-input">Description</label>
                <input
                    id="description-input"
                    className="form-control"
                    type="text"
                    value={newForm.description}
                    name="description"
                    onChange={handleChange}
                />
                <label htmlFor="type-input">What Type of Activity</label>
                <input
                    id="type-input"
                    className="form-control"
                    type="text"
                    value={newForm.type}
                    name="type"
                    onChange={handleChange}
                />
                <button className="btn btn-primary"> <input type="submit" value="Create Activity" /></button>
            </form>
            {props.activities ? loaded() : loading()}
        </section>
    </div>
);
}


export default Index;