import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Skills from './Skills'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'


function Home() {
    return(
        <div>
            <Navbar />
            <Hero />
            <Skills />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home