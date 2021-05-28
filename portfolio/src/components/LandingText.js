import React from 'react'
import styled from 'styled-components';

const PStyle = styled.div`
// max-width: 500px;
// margin: 0 auto;
// font-size: 1.8rem;
// line-height: 1.3em;
// position: absolute;
// left: 48%;

        
@media only screen and (max-width: 768px){
    font-size: 1.4rem;

}
`
export default function LandingText() {
    return (
        <PStyle>
           <p>I am a junior at PES University<br/>Im bout to jkbdskjbsdkjbskjdbvjkb<br/>kbsakfbakfb</p> 
        </PStyle>
    )
}
