import React from "react";
import {AiOutlineProject} from "react-icons/ai"


export default function ProjectLinks(){
    return(
        <div class="navLinks">
        <a href="#projects" class="largeNav">Projects</a>
        <a href="#projects" class="smallNav"><AiOutlineProject/><br/>Projects</a>
        </div>
    )
}