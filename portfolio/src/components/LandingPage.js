import React from 'react'
import Sticker from '../assets/images/sticker-f.png';
import LandingText from './LandingText';
import Buttons from './Buttons';
import { AiFillGithub,AiOutlineLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
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
        top: 300px;
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
        top: 20rem;
        max-width: 900px;
        //width: 100%;
        //height: 600px;
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

//     .landing_social,
//   .location {
//     display: flex;
//     flex-direction: column;
//     gap: 2rem;
//     position: absolute;
//     bottom: 20px;
//     width: 50px;
//   }
//   .landing_social {
//     left: 50px;
//   }
//   .location {
//     right: 50px;
//   }
//   .social_icons,
//   .location {
//     width: 50px;
//     p {
//       font-size: 1.6rem;
//       transform: translateY(-70px) rotate(90deg);
//       letter-spacing: 0.7rem;
//       text-transform: uppercase;
//     }
//     svg {
//       max-height: 45px;
//       width: 16px;
//       margin: 0 auto;
//       object-fit: contain;
//     }
//   }
//   .location {
//     svg {
//       max-height: 70px;
//     }
//   }

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
    // p {
    //   font-size: 1.6rem;
    //   transform: translateY(-70px) rotate(90deg);
    //   letter-spacing: 0.7rem;
    //   text-transform: uppercase;
    // }
    svg {
      //padding: 10%;
      max-height: 55px;
      width: 36px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
    // .location {
    //     img {
    //     max-height: 70px;
    //     }
  



    @media only screen and (max-width: 768px) {
        .land {
            text-align: center;
            justify-content: center;
            display: flex;
            //left: 80px;
            //align-items: center;
        }
        .landing {
            //left: 1px;
            top: 190px;
             font-size: 1.4rem;
            margin-bottom: -3rem;
            left: 60%;
          .name {

            font-size: 4.5rem;
          }
        }
        .img_landing{
            //top: 20rem;
            //max-width: 900px;
            //width: 100%;
            //height: 300px;
            //margin: 0 auto;
            position: relative;
            top: 280px;
            right: 10px;
            // height : 20px;
            // max-width: 30px;
            //right: 10%;
            //display: none;
            // max-height: 35px;
             width: 204px;
            // margin: 0 auto;
            // object-fit: contain;
        }
        .landing_info {
          //margin-top: 200rem;
          position: relative;
          top : 370px;
          left: 60%;
          
        }
        .landing_social {
          left: 0px;
          position: relative;
          
          //top: 1px;
          bottom: +7%;
          //width: 50px;
          .social_icons {
            //width: 20px;
            // p {
            //   font-size: 1.2rem;
            // }
            svg {
              max-height: 50px;
            }
          }
        //   .hero__social__text {
        //     ul {
        //       li {
        //         a {
        //           font-size: 1.2rem;
        //           margin-bottom: 1rem;
        //         }
        //       }
        //     }
        //   }
        // }
        // .hero__scrollDown {
        //   right: 0;
        //   width: 20px;
        //   gap: 1rem;
        //   p {
        //     font-size: 1.3rem;
        //   }
        // }
      }
      // @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) 
      // and (orientation: portrait) { display: none;}
    
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
