import React from 'react'
import Sticker from '../assets/images/sticker-f.png';
import LandingText from './LandingText';
import Buttons from './Buttons';
import { AiFillGithub,AiOutlineLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

import styled from 'styled-components';


const PText = styled.div`
max-width: 500px;
margin: 0 auto;
font-size: 1.3rem;
line-height: 1.3em;
color: gray;
@media only screen and (max-width: 768px) {
  font-size: 1rem;
}
`;

const LandingStyles = styled.div`

    
    .land{
         position: absolute;
         top: 0;
         right: 0;
         left: 0;
         bottom: 0;
         margin: 10px;
    }
    .landing {
        position: absolute;
        top: 300px;
        left: 60%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        position: absolute;
        
        text-align: center;
        justify-content: center;
        
        span {
          display: inline-block;
          width: 100%;
        }
        .name {
            font-family: 'Montserrat SemiBold';
            font-size: 4rem;
            color: var(--white);
          }
    }
    .img_landing {
        top: 20rem;
        max-width: 900px;
        margin: 0 auto;
        position: relative;
        left: 2%;
      }

    .landing_info{
        font-size: 1.8rem;
        position: absolute;
        top: 500px;
        left: 60%;
        margin-right: -50%;
        transform: translate(-50%, -50%);     
        text-align: center;
        justify-content: center;
    }

  .landing_social,
  .social_icons {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    //bottom: 70px;
    width: 50px;
    
  }
  
  .location {
    right: 50px;
  }

  .social_icons,
  {
    left: 50px;
    width: 50px;
    svg {
     
      max-height: 55px;
      width: 36px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
     

  

    @media only screen and (max-width: 768px) {
      
        .land {
            text-align: center;
            justify-content: center;
            display: flex;
            
        }
        .landing {
           
            top: 170px;
            font-size: 1.4rem;
            margin-bottom: -3rem;
            left: 65%;
          .name {

            font-size: 4.5rem;
          }
          
        }
        .img_landing{
            
            position: relative;
            top: 280px;
            // right: 10px;
             width: 100px;
            //justify-content: center;
            
        }
        .landing_info {
          position: relative;
          top : 370px;
          left: 67%;
          
        }
        .landing_social {
          left: 0px;
          position: relative;
          
         
          bottom: +7%;
         
          .social_icons {
           
            svg {
              max-height: 50px;
            }
          }
        
      }
      @media only screen and (max-width: 632px) {
        .img_landing{
                
          position: relative;
          top: 280px;
          // right: 10px;
           width: 140px;
          //justify-content: center;
          
      }
      }
      @media only screen and (max-width: 459px) {
        .img_landing{
                
          position: relative;
          top: 280px;
          // right: 10px;
           width: 200px;
          //justify-content: center;
          
      }
      }
    
`;





export default function LandingPage() {
    return (
    <LandingStyles>
    <div className="land">    
        <div className="container">
            <h1 className="landing">
                <span>Hey there! I am </span>
                <span className="name">Roshini Bhaskar</span>
                {/* <PText>Web Dev|Data Science</PText> */}
            </h1>
            <div className="img_landing">
                <img src={Sticker} alt=""></img>
            </div>
            <div className="landing_info">
                <LandingText/>
                <Buttons btnLink="/projects"
                outline={false}
                btnText="My Projects" />
                <p><br/></p>
            </div>
            <div className="landing_social">
                {/* <div className="landing_social_indicator">

                </div> */}
                <div className="social_icons">
                    <ul>
                        <li>
                        <a 
                            href="https://pesitsouth.pes.edu/"
                            target="_blank"
                            rel="noreferrer" ><FaGraduationCap/></a>
                        </li>

                        <li>
                        <a 
                            href="https://github.com/roshbhaskar"
                            target="_blank"
                            rel="noreferrer" ><AiFillGithub/></a>
                        </li>
                        <li>
                        <a 
                            href="https://www.linkedin.com/in/roshini-b-50493a1a4/"
                            target="_blank"
                            rel="noreferrer" ><AiOutlineLinkedin/></a>
                        </li>
                        <li>
                        <a 
                            href="https://www.instagram.com/roshinibhaskar"
                            target="_blank"
                            rel="noreferrer" ><FiInstagram/></a>
                        </li>
                        
                    </ul>
                </div>

    

            </div>
        </div>
    </div>    
    </LandingStyles>
    )
}
