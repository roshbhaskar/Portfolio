import React from 'react'
import Footer from '../components/Footer'
import LandingPage from '../components/LandingPage'
import ParticleBackground from '../styles/ParticleBackground'

export default function Home() {
    return (
        <div>
            <ParticleBackground/>
        <div className="container">
            {/* <h1>This is home page!</h1> */}
           
           
           
            <LandingPage/>
            <Footer/>
        </div>
        </div>
    )
}
