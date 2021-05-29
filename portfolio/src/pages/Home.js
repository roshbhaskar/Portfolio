import React from 'react'
import Footer from '../components/Footer'
import LandingPage from '../components/LandingPage'
import ParticleBackground from '../styles/ParticleBackground'

export default function Home() {
    return (
        <div>
            {/* <h1>This is home page!</h1> */}
           
           
            <ParticleBackground/>
            <LandingPage/>
            <Footer/>
        </div>
    )
}
