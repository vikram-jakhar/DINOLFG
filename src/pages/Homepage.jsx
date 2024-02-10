import React from 'react'
import HeroSec from '../Components/HeroSec'
import AboutSec from '../Components/AboutSec'
import Tokenomics from '../Components/Tokenomics'
import Utility from '../Components/Utility'
import RoadMap from '../Components/RoadMap'
import AccordionSec from '../Components/Accrodian'
import Footer from '../Components/Footer'
import Lodre from '../Components/Loder'
import BackToTop from '../Components/Backtop'

const Homepage = () => {

    return (
        <div>
            <Lodre />
            <HeroSec />
            <AboutSec />
            <Tokenomics />
            <Utility />
            <RoadMap />
            <AccordionSec />
            <Footer />
            <BackToTop />
        </div>
    )
}

export default Homepage