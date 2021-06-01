import React from 'react'
import styled from 'styled-components';
import FooterCol from './FooterCol';

const PStyle = styled.div`

font-size: 1.4rem;

`;

const CopyRight = styled.div`

font-size: 1.4rem;

color:white; 
@media only screen and (max-width: 768px){
    font-size: 1.3rem;
    
}
`;

const FooterStyles = styled.div`
padding-top: 3rem;
background-color: var(--deep-dark);

.container{
    
    display: flex;
    gap: 4rem;
    margin-bottom: 15px;
}
.footer__col1{
    flex:2;
}

.footer__col2{
    margin-top: 7px;
    flex:1.4;
}
.footer__col3
{
    margin-top: 7px;
    flex:1.1;
}
.footer__col4
{
    margin-top: 7px;
    flex:1.1;
}
.footer__col1__title{
    font-size: 2.8rem;
    margin-bottom: 1rem;
    color: white;
}

.container_
{
    text-align: center;
    background-color: var(--dark-bg);
}
@media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container_ {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;
export default function Footer() {
    return (
        <FooterStyles>
            <div className="container">
                <div className="footer__col1">
                    <h1 className="footer__col1__title">
                        Roshini Bhaskar
                    </h1>
                    <PStyle>
                    <p>A junior at PES University.<br/>Pursuing B.Tech with Computer Science major.</p> 
                    </PStyle>
                </div>
                <div className="footer__col2">
                    <FooterCol
                        heading="Contact"
                        links={
                            [{
                            title:"+91 9972883933",
                            path:"#"
                        },
                        {
                            title:"roshbhaskar25@gmail.com",
                            path: 'mailto:roshbhaskar25@gmail.com',
                        },
                        {
                            title:"Bangalore, India",
                            path:"https://www.google.com/maps/place/Bengaluru,+Karnataka,+India/@12.9538477,77.3507442,10z/data=!3m1!4b1!4m5!3m4!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627"
                        }]
                    }
                    />
                </div>

                <div className="footer__col3">
                <FooterCol
                        heading="Follow Me"
                        links={[
                            {
                              title: 'Github',
                              path: 'http://facebook.com',
                            },
                            {
                              title: 'LinkedIn',
                              path: 'http://twitter.com',
                            },
                            {
                              title: 'Instagram',
                              path: 'http://instagram.com',
                            },
                          ]}
                    />
                </div>
                <div className="footer__col4">
                    <FooterCol
                        heading="Jump to"
                        links={
                            [{
                            title:"Home",
                            path: '/',
                            type: 'Link',
                        },
                        {
                            title:"Projects",
                            path: '/projects',
                            type: 'Link',
                        },
                        {
                            title:"Resume",
                            path: '/contact',
                            type: 'Link',
                        }]
                    }
                    />
                </div>
            </div>
            <div className="copyright">
                <div className="container_">
                    <CopyRight>
                    © 2021 | Roshini Bhaskar
                    </CopyRight>
                </div>
            </div>
        </FooterStyles>
    )
}
