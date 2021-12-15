import React from "react";
import {FaLink} from "react-icons/fa"
import {AiFillGithub} from "react-icons/ai"


export default function Project2(){
    return(
        <>
            <article class="project">
                <h4 class="title">Reconnect and Reclaim</h4>
                <p>Full stack website providing resources to indeginous people learning their traditional languages.
                <br/>
                </p>
                <div class="p2img"></div>
                <p class="techStack"> 
                    <p class="techUsed" >Tech Used:</p> 
                    <div class='p2skillsImage'></div>
                </p>
                <section class="weblinks">
                <a href='https://reconnect-and-reclaim.herokuapp.com/'  id="websiteLink" target="_blank"><FaLink/>Deployed Site</a>
                
                <a href='https://github.com/shannonshensley96/Reconnect-and-Reclaim' class="weblinks" id="github" target="_blank">GitHub Repo</a>
                </section>
            </article>
            <article class="miniProject" id="p2">
                <div class="p2img"></div>
                <h4 class="title2">Reconnect and Reclaim</h4>
                <p>Full stack website providing resources to indeginous people learning their traditional languages.
                </p>
                <p class="techStack"> 
                    <p class="techUsed" >Tech Used:</p> 
                    <div class='p2skillsImage'></div>
                <section class="weblinks">
                <a href='https://reconnect-and-reclaim.herokuapp.com/'  id="websiteLink" target="_blank"><FaLink/>Deployed Site</a>
                <a href='https://github.com/shannonshensley96/Reconnect-and-Reclaim' id="github" target="_blank"><AiFillGithub/>Repo</a>
                
                </section>
                </p>
            </article>
        </>
    )
}

