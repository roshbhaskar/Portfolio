import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
    margin-top: 2rem;
    .button{
        font-size: 1.8rem;
        background-color: ${(props=>
            props.outline ? 'transparent' : 'var(--gray-1)'
        )};
        padding: 0.7em 2em;
        border-radius: 8px;
        display: inline-block;
        border: 2px solid var(--gray-1);
        color: white;
    }

    @media only screen and (max-width: 768px){
        .button{
            font-size: 1.4rem;
        }
    }
`;

//you can provide default values for props after destructing them
export default function Buttons({btnText="none",btnLink = "Test",outline=false}) {
    return (
        <ButtonStyle outline={outline}>
            <Link className="button" 
            to={btnLink}
            
            >{btnText}</Link>
        </ButtonStyle>
    )
}
