import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';
//import ParticleBackground from './styles/ParticleBackground';

ReactDOM.render(
  <>
  {/* <ParticleBackground/> */}
    <GlobalStyles />
    <Typography />
    <App />
  </>,
  document.getElementById('root')
);