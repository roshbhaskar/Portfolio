import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #1A1A1D;
    --gray-1: #b12b60;
    --deep-dark: #2c2b2b;
    --gray-2: #C3073F;
    --white : white;
    --black: black;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }

  #tsparticles{
    //background-color:red;
    height: 700px;
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    //height:  600px;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }

  @media only screen and (max-width: 768px) {
  html{

    width:128%;
  }

  @media only screen and (max-width: 259px) {
    html{
  
      display:none;
    }
}
`;
export default GlobalStyles;
