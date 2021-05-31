import React from 'react'
import styled from 'styled-components';
import Button from './Buttons';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';

const PText = styled.div`
max-width: 500px;
margin: 0 auto;
font-size: 1.8rem;
line-height: 1.3em;
color: white;
@media only screen and (max-width: 768px) {
  font-size: 1.4rem;
}
`;
const ResumeStyle = styled.div`
    padding: 4rem 0;
    .resume{
        margin-top: 5rem;
    }
    .top-section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
      }
      .left {
        flex: 3;
      }
      .right {
        flex: 2;
      }
      .about__subheading {
        font-size: 2.2rem;
        margin-bottom: 2rem;
        span {
          background-color: var(--deep-dark);
          padding: 0.5rem;
          border-radius: 8px;
        }
      }
      .about__heading {
        font-size: 2.6rem;
        margin-bottom: 3rem;
        //color: white;
      }
      .about__info {
        //color: white;
        margin-bottom: 4rem;
        .para {
          max-width: 100%;
        }
      }
      .right {
        img {
          border: 2px solid var(--gray-1);
          height: 300px;
        }
      }
      .about__info__items {
        margin-top: 7rem;
      }
      .about__info__item {
        margin-bottom: 5rem;
      }
      .about__info__heading {
        font-size: 2.6rem;
       color: white;
      }
      @media only screen and (max-width: 768px) {
        padding: 4rem 0;
        .top-section {
          flex-direction: column;
          gap: 5rem;
        }
        .about__subheading {
          font-size: 1.8rem;
        }
        .about__heading {
          font-size: 1.8rem;
        }
        .about__info__heading {
          font-size: 1.8rem;
          left:10rem;
        }
      }
`;
export default function Resume() {
    return (
        <ResumeStyle>
            <br/>
            <div className="resume">
            <div className="top-section">
            <div className="left">
              {/* <p className="about__subheading">
                Hi, I am <span>Ayan Khan</span>
              </p> */}
              <h2 className="about__heading">Hope you had fun snooping around!</h2>
              <div className="about__info">
                <PText>
                  I love art and desgin. Building things from scratch always seems exciting and the progress of it keeps me motivated.<br/> 
                  My main domains of interest are Web Development and Data Science. 
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            {/* <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Nasirabad Govt. High School, Chattogram']}
              />
              <AboutInfoItem
                title="Collage"
                items={['BAF Shaheen College Chattogram']}
              />
              <AboutInfoItem
                title="Varsity"
                items={['University Of Chitiagong']}
              />
            </div> */}
            <div className="about__info__item">
              <h2 className="about__info__heading">My Skills</h2>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'React']}
              />
               <AboutInfoItem
                title="AI"
                items={['Machine Learning','Keras','Spark','Hadoop']}
              />
              <AboutInfoItem
                title="Proficient in"
                items={['C', 'Python', 'C++']}
              />
              <AboutInfoItem
                title="Backend"
                items={['Mysql', 'Flask']}
              />
             
            </div>
            {/* <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2010-2012"
                items={['junior developer at web Cifar']}
              />
              <AboutInfoItem
                title="2012-2016"
                items={['Front end developer at web Cifar ']}
              />
              <AboutInfoItem
                title="2016-"
                items={['Freelance web Developer']}
              />
            </div> */}
          </div>
            </div>
            {/* <p>Hi</p> */}
        </ResumeStyle>
    )
}
