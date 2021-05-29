import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import projects from '../assets/data/projects';

export default function ProjectComp() {
    return (
        <div>
           <br/>
            <h1 className="heading_1">My main projects</h1>
            <div className="projects_completed">
                <Swiper>
                {projects.map((project,index)=>{
                    if(index>=5) return;
                    return <div>This is our Project</div>
                })}
                </Swiper>
            </div>
        </div>
    )
}
