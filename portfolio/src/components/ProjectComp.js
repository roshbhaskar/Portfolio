import React from 'react'
import { Swiper } from 'swiper/react';
import projects from '../assets/data/projects';

export default function ProjectComp() {
    return (
        <div>
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
