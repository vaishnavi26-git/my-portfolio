import React from 'react'
import ProjectItem from '../components/ProjectItem'
import "../Styles/Projects.css"
import { ProjectList } from '../helpers/ProjectList';
function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {/* <ProjectItem name="Entertainment Website" image={proj1}/>
        <ProjectItem name="Entertainment Website" image={logo}/>
 */}

 {ProjectList.map((project,index)=>{
 return  <ProjectItem id ={index} name={project.name} image={project.image}/>
 })}
      </div>
    </div>
  )
}

export default Projects
