import React from 'react'

function lists({image, name , description}) {
  return (
    <div className="lists">
      <div style = {{backgroundImage : `url(${image})`}}></div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default lists
