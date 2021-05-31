import React from 'react'
import Footer from '../components/Footer'
import styled from 'styled-components';
import Resume from '../components/Resume';

const ContactStyle = styled.div`
    .heading_1{
        position: relative;
        top: 100px;
        color: white;
    }
    @media only screen and (max-width: 768px){
        .heading_1{
            // postion: absolute;
            top: 70px;
            font-size: 2rem;
        }
    }
`;
export default function Contact() {
    return (
        <ContactStyle>
        <div className="container">
            {/* <br></br>
            <br/>
            <br/> */}
            <h1 className="heading_1"                           
            >HElloo</h1>
            <Resume/>
            <Footer/>
        </div>
        </ContactStyle>
    )
}
