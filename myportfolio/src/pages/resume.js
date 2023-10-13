import React from 'react'
import {resumeparts} from "../helper/resumeparts";
import lists from "../components/lists.js";
import "../styles/resume.css"
function Resume() {
  return (
    <div className = "resume">
      <h1 className = "resumeTitle">My Resume/ CV</h1>
      <div className = "resumeParts">
            {
                resumeparts.map((parts, key) =>{
                    return <lists  key ={key} image ={parts.image} name = {parts.name} description ={parts.description}/>
                })
            }
      </div>
      <div><h2>How are you?</h2></div>
    </div>
  )
}

export default Resume;
