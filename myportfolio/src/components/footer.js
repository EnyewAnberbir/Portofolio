import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {link} from "react-router-dom";
import "../styles/footer.css"
function Footer() {

  return (
    <div className = "footer">
        <div className = "socialMedia">
        <a href="https://www.linkedin.com/in/enyew-anberbir-987b97256/" target = "_blank"><LinkedInIcon/> </a>
        <p>&copy; 2023 enyewanberbir.com</p>
        </div>
    
      
    </div>
  )
}

export default Footer
