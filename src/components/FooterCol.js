import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ColStyle = styled.div`
    .heading{
        font-size: 2rem;
        margin-bottom: 1rem;
        color: white;
    }
    li{
        margin-bottom: 0.3rem;
        
    }
    a{
        font-size: 1.4rem;
    }
`;





export default function FooterCol({
    heading="col",
    links=[
        {
          type: 'Link',
          title: 'Home',
          path: '/home',
        },
        {
          type: 'Link',
          title: 'About',
          path: '/about',
        },
      ],
    }) {
    return (
        <ColStyle>
            <h1 className="heading">
                {heading}
            </h1>
            <ul>
            {links.map((item, index) => (
          <li key={index}>
            {item.type === 'Link' ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
            </ul>
        </ColStyle>
    )
}
