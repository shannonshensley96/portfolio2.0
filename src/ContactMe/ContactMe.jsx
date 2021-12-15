import React from "react";
import "./ContactMe.css";
import SocialLinks from "./socialLinks/socialLinks";


export default function ContactMe(){
    return(
        <div class="contactMePage">
            <h1 id="pageTitle">Contact Me</h1>
                <section id="contactMe">
                    <SocialLinks/>
                </section>
        </div>
    )

}