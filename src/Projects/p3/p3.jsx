import React from "react";
import {FaLink} from "react-icons/fa"
import {AiFillGithub} from "react-icons/ai"

export default function Project3(){
    return(
        <>
            <article class="project">
                    <h4 class="title">Happy Trails</h4>
                    <p>Full stack project collaboration with 2 other developers allowing users to search nearby trails by amenity or location.
                    <br/>
                    </p>
                    <div class="p3img"></div>
                    <p class="techStack">
                        <p class="techUsed">Tech Used:</p>
                        <div class='p3skillsImage'></div>
                    </p>
                    <section class="weblinks">
                    <a href='https://happytrails21.herokuapp.com/'  id="websiteLink" target="_blank"><FaLink/>Deployed Site</a>
                    
                    <a href='https://github.com/awojdyla89/Happy-Trails' id="github" target="_blank">GitHub Repo</a>
                    </section>
            </article>
            <article class="miniProject">
                    <div class="p3img"></div>
                    <h4 class="title">Happy Trails</h4>
                    <section>
                    <p>Full stack project collaboration with 2 other developers allowing users to search nearby trails by amenity or location.
                    <br/>
                    <p class="techStack">
                        <p class="techUsed">Tech Used:</p>
                        <div class='p3skillsImage'></div>
                    </p>
                    <section class="weblinks">
                    <a href='https://happytrails21.herokuapp.com/'  id="websiteLink" target="_blank"><FaLink/>Deployed Site</a>
                    <a href='https://github.com/awojdyla89/Happy-Trails' id="github" target="_blank"><AiFillGithub/>Repo</a>
                    </section>
                    </p>
                    </section>
            </article>
        </>
    )
}


