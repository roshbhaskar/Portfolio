import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import projects from '../assets/data/projects';
import ProjectItem from './ProjectItem';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);

const ProjectCompStyle = styled.div`

padding: 4rem 0;

.heading_1{
    color: white;
    //top: 300rem;  
}
.projects_completed {
  display: flex;
  gap: 3rem;
  margin-top: 5rem;
}
.swiper-container {
  padding-top: 8rem;
  max-width: 100%;
}
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  height: 50px;
  width: 50px;
  background: var(--deep-dark);
  z-index: 10;
  right: 60px;
  left: auto;
  top: 0;
  transform: translateY(50%);
  color: white;
  border-radius: 8px;
}
.swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projects_completed {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 2rem;
      gap: 5rem;
      .projectItem_img {
        width: 100%;
      }
    }
  }
`;

export default function ProjectComp() {
    return (
        <ProjectCompStyle>
           <br/>
            {/* <h1 className="heading_1">My main projects</h1> */}
            <div className="projects_completed">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    breakpoints={{
                      // when window width is >= 640px
                      640: {
                        slidesPerView: 1,
                      },
                      // when window width is >= 768px
                      768: {
                        slidesPerView: 2,
                      },
                      // when window width is >= 1200px
                      1200: {
                        slidesPerView: 3,
                      },
                    }}
                >
                {projects.map((project,index)=>{
                    if(index>=5) return<div></div>;
                    return (
                       <SwiperSlide key={project.id}>
                  <ProjectItem
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                  />
                </SwiperSlide>
                    )
                })}
                </Swiper>
            </div>
        </ProjectCompStyle>
    )
}
