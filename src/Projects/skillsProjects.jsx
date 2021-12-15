import React from "react";
import "./skillsProjects.css"
import Project2 from "./p2/p2";
import Project3 from "./p3/p3";
import Project4 from "./p4/p4";
import {MdOutlineSwipe} from "react-icons/md"





export default function Project(){
    return(
        <>
        <div class="PageTitle">
        
        <h3 id="projects">Projects</h3>
        </div>
        <div class="recentProjects" >            
                <Project2 className="item" id="p2"/>
                <Project3 class="item"/>
                <Project4 class="item" id="p4"/>
           
        </div>
        <MdOutlineSwipe class="miniScroll" color="grey"/>
        </>
        
    )
}