import React from "react";
import {ImHome} from "react-icons/im"



export default function HomeLink(){
    return(
        <div class="navLinks">
        <a href="/" class="largeNav" id="largeHome">Home</a>
        <a href="/"class="smallNav" color="white"><ImHome/><br/>Home</a>
        </div>
    )
}