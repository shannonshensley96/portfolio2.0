import React from "react";
import {FaLink} from "react-icons/fa"
import {AiFillGithub} from "react-icons/ai"

export default function Project4(){
    return(
        <>
        <article class="project">
            <h4 class="title">The Hiring Lab</h4>
            <p>MERN stack application allowing users to search job openings by keyword or location.
            <br/>
            </p>
            <div class="p4img"></div>
            <p class="techStack">
            <p class="techUsed">Tech Used:</p> 
            <div class='p4skillsImage'/>
            </p>
            <section class="weblinks">
            <a href='https://the-hiring-lab.herokuapp.com/' id="websiteLink" target="_blank" ><FaLink/>Deployed Site</a>
            
            <a href='https://github.com/shannonshensley96/The-Hiring-Lab/' id="github" target="_blank">GitHub Repo</a>
            </section>
        </article>
        <article class="miniProject">
                    <div class="p4img"></div>
                    <h4 class="title">The Hiring Lab</h4>
                    <section>
                    <p>MERN stack application allowing users to search job openings by keyword or location.
                    <br/>
                    <p class="techStack">
                        <p class="techUsed">Tech Used:</p>
                        <div class='p4skillsImage'></div>
                    </p>
                    <section class="weblinks">
                    <a href='https://the-hiring-lab.herokuapp.com/'  id="websiteLink" target="_blank"><FaLink/>Deployed Site</a>
                    <a href='https://github.com/shannonshensley96/The-Hiring-Lab/' id="github" target="_blank"><AiFillGithub/>Repo</a>
                    </section>
                    </p>
                    </section>
        </article>
        </>
    )
}
                   

