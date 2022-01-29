import React from 'react'
import HeroSection from '../../HeroSection';
import {homeObjOne, homeObjTwo, homeObjThree} from "./Data"


function learnMore() {
    return (
        <>
            <HeroSection {...homeObjTwo} />
        </>
    )
}

export default learnMore;
