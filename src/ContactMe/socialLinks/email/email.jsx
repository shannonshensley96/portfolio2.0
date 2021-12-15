import React from "react";
import {MdOutlineMail} from "react-icons/md";

export default function Email(){
    
    return(
        <>
        <a href="mailto:shannonshensley96@gmail.com" class="largeLink">
        <MdOutlineMail size="80px" color="white"/>
        </a>
        <a href="mailto:shannonshensley96@gmail.com" class="miniLink">
        <MdOutlineMail size="48px" />
        </a>
        </>
    );
    
}