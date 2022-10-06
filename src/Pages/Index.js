import { useState } from "react";
import { Link } from "react-router-dom"

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
    <section>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={newForm.name}
            name="name"
            onChange={handleChange}
            />
            <input
            type="text"
            value={newForm.accessability}
            name="accessability"
            onChange={handleChange}
            />
            <input
            type="text"
            value={newForm.description}
            name="description"
            onChange={handleChange}
            />
            <input
            type="text"
            value={newForm.type}
            name="type"
            onChange={handleChange}
            />
            <input type="submit" value="Create Activity" />
        </form>
        {props.activities ? loaded() : loading()}
        </section>
);
}


export default Index;