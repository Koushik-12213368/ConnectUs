import React from "react";
import Hero from "./Hero";
import FeaturedResource from "./FeaturedResource";
import AllResource from "./AllResource";
import Help from "./Help";



function ResourcePage(){
    return(
        <>
        <Hero/>
        <FeaturedResource/>
        <AllResource/>
        <Help/>
        </>
    )
}

export default ResourcePage;