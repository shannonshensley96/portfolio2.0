import React from "react";
import {MdAddIcCall} from "react-icons/md"



export default function ContactMeLink(){
    return(
        <div class="navLinks">
        <a href="#contactMe" class="largeNav" id="largeContact">Contact Me</a>
        <a href="#contactMe"class="smallNav"><MdAddIcCall /><br/>Contact Me</a>
        </div>
    )
}