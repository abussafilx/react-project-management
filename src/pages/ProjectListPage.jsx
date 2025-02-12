import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";

import { API_URL } from "../config/api";

function ProjectListPage() {

    const [projects, setProjects] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/projects`)
            .then( response => {
                setProjects(response.data.toReversed());
            })
            .catch(e => console.log("Error getting projects from the API...", e));
    }, []);


    if(projects === null) {
        return <Loader/>
    }


    return (
        <>
            <h1>Number of projects... {projects.length}</h1>

            {projects.map((e,i) => {
                return <div key={e.id} className="card">
                    <h3>    {e.title}</h3>
                    
                </div>

            })}
        </>
    );
}

export default ProjectListPage;