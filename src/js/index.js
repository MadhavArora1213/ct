import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import './index.css';
import gsap from './gsap.min';
import Flip from './Flip.min';
import ScrollTrigger from './ScrollTrigger.min';
import lenis from './lenis.min';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

// Initialize animations and scroll effects here if needed
gsap.registerPlugin(ScrollTrigger);
lenis.init();