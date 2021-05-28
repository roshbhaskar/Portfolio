import React from 'react'
import Sticker from '../assets/images/sticker-f.png';
import LandingText from './LandingText';
import Buttons from './Buttons';
import { AiFillGithub,AiOutlineLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import styled from 'styled-components';

const LandingStyles = styled.div`
    .land{
        // height: 100vh;
        // //min-height: 1000px;
        // width: 100%;
        // text-align: center;
        // display: flex;
        // align-items: center;
        // justify-content: center;
        // position: relative;

         position: absolute;
         top: 0;
         right: 0;
         left: 0;
         bottom: 0;
         margin: 10px;
    }
    .landing {
        position: absolute;
        top: 30%;
        left: 60%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        position: absolute;
        
        text-align: center;
        justify-content: center;
        //display: flex;
        //align-items: center;
        
        
        // font-size: 2rem;
        // margin-bottom: -4rem;
        // position: relative;
        // left : 20rem;
        
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
        top: 15rem;
        max-width: 900px;
        //width: 100%;
        //height: 600px;
        margin: 0 auto;
        position: relative;
        left: 5%;
      }

    .landing_info{
        font-size: 1.8rem;
        position: absolute;
        top: 55%;
        left: 60%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        
        
        text-align: center;
        justify-content: center;
    }
    //background-color: red;
`;





export default function LandingPage() {
    return (
    <LandingStyles>
    <div className="land">    
        <div className="container">
            <h1 className="landing">
                <span>Hey there! I am </span>
                <span className="name">Roshini Bhaskar</span>
            </h1>
            <div className="img_landing">
                <img src={Sticker} alt=""></img>
            </div>
            <div className="landing_info">
                <LandingText/>
                <Buttons btnLink="/projects"
                outline={false} />
            </div>
            <div className="landing_social">
                {/* <div className="landing_social_indicator">

                </div> */}
                <div className="social_icons">
                    <ul>
                        {/* <li>
                        <a 
                            href="https://www.google.com"
                            target="_blank"
                            rel="noreferrer" ><AiFillGithub/></a>
                        </li>
                        <li>
                        <a 
                            href="https://www.google.com"
                            target="_blank"
                            rel="noreferrer" ><AiOutlineLinkedin/></a>
                        </li>
                        <li>
                        <a 
                            href="https://www.google.com"
                            target="_blank"
                            rel="noreferrer" ><FiInstagram/></a>
                        </li> */}
                    </ul>
                </div>

            </div>
        </div>
    </div>    
    </LandingStyles>
    )
}
