import React from 'react'
import Footer from '../components/Footer'
import ProjectComp from '../components/ProjectComp'
import styled from 'styled-components';

const ProjectStyle = styled.div`
    .heading_1{
        position: relative;
        top: 150px;
        color: white;
        font-size: 2.6rem;
    }
    @media only screen and (max-width: 768px){
        .heading_1{
          
            top: 110px;
            font-size: 2rem;
        }
    }
`;
export default function Projects() {
    return (
        <ProjectStyle>
        <div className="container">
            
            <h1 className="heading_1"                           
            >Projects I have worked on</h1>
            <ProjectComp/>
            <Footer/>
        </div>

        </ProjectStyle>
    )
}
