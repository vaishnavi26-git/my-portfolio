import React from 'react';
import { useParams } from 'react-router-dom';
import {ProjectList} from '../helpers/ProjectList';
import { GitHub } from '@material-ui/icons';
import "../Styles/ProjectDisplay.css"
function ProjectDisplay() {
    const {id}=useParams();
    const project =ProjectList[id]
  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <img src={project.image} />
      <GitHub/>
      <p><b>Skills:  </b>{project.skills} </p>
    </div>
  )
}

export default ProjectDisplay
