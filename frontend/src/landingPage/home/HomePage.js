import React from "react";
import Hero from "./Hero";
import Feeling from "./Feeling";
import Support from "./Support";
import Resource from "./Resource";
import Event from "./Event";
import Testimonial from "./Testimonial";
import Help from "./Help";


function HomePage () {
    return(
        <>
        <Hero/>
        <Feeling/>
        <Support/>
        <Resource/>
        <Event/>
        <Testimonial/>  
        <Help/>
        </>
    )
}

export default HomePage;