import React, {useState, useEffect} from 'react'
import Navbar from './Navbar';
import sanityClient from '../client'

const Project =() =>{
     const [projects, setProjects] = useState([])

    useEffect(() =>{
        sanityClient.fetch(`*[_type == "project"]{
            title,
            description,
            link
        }`)
        .then(data =>{
            console.log(data)
            setProjects(data)
        })
        .catch(console.error);
    }, []);


    const projectList = projects.length ?(
        projects.map(project => (
            <div className="col s12 l6">
                <div className="card">
                    <div className="card-content">
                        <h4 className="title">{project.title}</h4>
                        <p>{project.description}</p>
                         <div  className="card-action">
                           <a href={project.link} className="blue-text" target="_blank">link👉</a>
                        </div>
                    </div>
                </div>
            </div>
        ))
    ) :(
        <div className="center">No projects yet</div>
        ) 

    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row cardspacing">
                    {projectList}
                </div>
            </div>
        </div>
    )
}

export default Project
