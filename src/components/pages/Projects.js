import Message from "../layout/Message";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from './Projects.module.css'
import Container from '../layout/Container';
import Loading from "../layout/Loading";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";


function Projects () {
    const [projects, setProjects] = useState ([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const location = useLocation()
    let message = ''
    if(location.state) {
         message = location.state.message
    }


    
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
                method: 'GET',
                header: {
                    'Content-tType': 'application/json',
                },
            })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
        }, 2500)
    }, [])


    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto"/>  
            </div>
            {message && <Message type="success" msg={message} />}
           
           
            <Container customClass="start"> 
                {projects.length > 0 &&
                projects.map((project) => 
                <ProjectCard 
                id={project.id}
                name={project.name}
                budget={project.budget}
                key={project.category.id}
                category={project.category.name}               
                />)}
                {!removeLoading && <Loading />}            
            </Container>
        
        </div>
    )
}

export default Projects;