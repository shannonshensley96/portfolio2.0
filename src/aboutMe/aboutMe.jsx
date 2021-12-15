import React from "react";
import "./aboutme.css"
import Skills from "../skills/skills";
import PersonalPhoto from "./personalPhoto/personalPhoto";


export default function AboutMe() {

    return(
        <body class="aboutMe" id="about-me">
            <div class='about-me'>
                <div class="Me-container">
                    <h1 class="hello" id="greeting">Hello! <br/><strong >I'm Shannon</strong></h1>
                    <section id="mybrand">
                        A Texas based full stack developer, graduate of General Assembly's SEI program with a passion for creating acessible and creative solutions.  
                    </section>
                    
                    <Skills class="skills"/>
                </div>
                <div class="AboutMephotos">
                    <PersonalPhoto class="mePhoto"/>
                </div>
            </div> 
               
        </body>
    )
}