import React from 'react'
import {Link} from 'react-router-dom';
import ProjectImg from '../assets/images/cavinimg.jpg';
import styled from 'styled-components';

const ProjectItemStyles = styled.div`
.projectItem_img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 1px solid grey;
    img {
      height: 100%;
    }
  }
  .projectItem_info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem_title {
    font-size: 2.2rem;
    color: white;
  }
  .projectItem_desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem_img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
    img = ProjectImg,
    title = 'Project Name',
    desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    link= "https://github.com/roshbhaskar/generic-red-black-trees"
  }) {
    return (
      <ProjectItemStyles>
        <a href={link} 
        target="_blank"
        rel="noreferrer"
        className="projectItem_img">
          <img src={img} alt="project img" />
        </a>
        <div className="projectItem_info">
          <a href={link}
          target="_blank"
          rel="noreferrer">
            <h3 className="projectItem_title">{title}</h3>
          </a>
          <p className="projectItem_desc">{desc}</p>
        </div>
      </ProjectItemStyles>
    );
  }