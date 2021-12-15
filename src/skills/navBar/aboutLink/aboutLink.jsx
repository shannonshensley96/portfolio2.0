import React from "react";
import {BsFillPersonFill} from "react-icons/bs";



export default function AboutLink(){
    return(
        <div class="navLinks">
        <a href="/#about-me" class="largeNav">About</a>
        <a href="/#about-me" class="smallNav"><BsFillPersonFill/><br/>About me</a>
        </div>
    )
}