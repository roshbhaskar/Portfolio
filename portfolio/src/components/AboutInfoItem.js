import React from 'react';
import styled from 'styled-components';

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

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  /* gap: 5rem; */
  margin-top: 3rem;
  //margin-left: 10rem;
  .title {
    font-size: 2rem;
    //color: white;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 18rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
   
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 1.8rem;
    }
  }
`;

export default function AboutInfoItem({
  title = 'Title',
  items = ['HTML', 'CSS'],
}) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}