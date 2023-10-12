import React, {useState} from "react";
import Logo from "../assets/look.webp";
import {Link} from "react-router-dom";
import "../styles/navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar(){
    const [openLinks, SetOpenLinks] = useState(false);

    const toggleNavbar = () =>{
        SetOpenLinks(!openLinks);
    }
    return(
<div className = "navbar">

    <div className = "leftSide" id={openLinks ? "open" : "close"}>
        <img src ={Logo}/>
        <div className = "hiddenLinks">
            <Link to="/">Home</Link>
            <Link to ="/about">About</Link>
            <Link to ="/skills">Skills</Link>
            <Link to ="/Resume">Resume</Link>

        </div>
    </div>
    <div className = "rightSide">
        <Link to="/">Home</Link>
        <Link to ="/about">About</Link>
        <Link to ="/skills">Skills</Link>
        <Link to ="/Resume">Resume</Link>
        <button onClick={toggleNavbar}>
            <ReorderIcon/>
        </button>
    </div>
 
</div>
    );
}

export default Navbar;