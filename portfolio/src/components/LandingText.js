import React from 'react'
import styled from 'styled-components';

const PStyle = styled.div`

font-weight: bold;
        
@media only screen and (max-width: 768px){
    font-size: 1.4rem;

}
`
export default function LandingText() {
    return (
        <PStyle>
           <p>Welcome to the place where<br/>I glady promote myself<br/></p> 
        </PStyle>
    )
}
