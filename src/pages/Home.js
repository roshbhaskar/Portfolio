import React from 'react'
import Footer from '../components/Footer'
import LandingPage from '../components/LandingPage'
import ParticleBackground from '../styles/ParticleBackground'
import styled from 'styled-components';

const HomeStyle = styled.div`
@media only screen and (max-width: 768px){
    .space_{
        margin-bottom: 4rem;
    }
}

`;


export default function Home() {
    return (
        <HomeStyle>
            <ParticleBackground/>
        <div className="container">
            {/* <h1>This is home page!</h1> */}
           
           
           
            <LandingPage/>
            <div className="space_"></div>
            <Footer/>
        </div>
        </HomeStyle>
    )
}
