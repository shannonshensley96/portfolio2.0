import React from "react";
import GitHub from "./gitHub/gitHub";
import LinkedIn from "./linkedIn/linkedIn";
import Email from "./email/email";

export default function SocialLinks(){
    return(
        <div class="linksSection">
            <h2 id="social-links">Social Links</h2>
            <section class= "Links">
                <GitHub />
                <LinkedIn />
                <Email />
            </section>
        </div>
    )
}