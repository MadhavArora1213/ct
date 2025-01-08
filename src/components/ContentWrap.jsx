import React from 'react';
import img1 from '../assets/Images/ctpark.jpg';
import img2 from '../assets/Images/cricket.jpg';
import img3 from '../assets/Images/culture.jpg';
import img4 from '../assets/Images/ncc.jpg';
import img5 from '../assets/Images/canteen.avif';
import img6 from '../assets/Images/workshopct.jpg';
import img7 from '../assets/Images/audi.jpg';
import '../App.css';

function ContentWrap() {
  return (
    <>
      <div className="content-wrap bg-black pb-20">
        <div className="content">
          <div className="title-wrap">
            <span className="title title--up">Common </span>
            <span className="title title--down">Areas</span>
          </div>
        </div>
        <div className="content content--layout content--layout-1">
          <svg className="content__img content__img--1 w-full h-auto" width="996" height="1344" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 896 1344">
            <defs>
              <filter id="displacementFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G" />
              </filter>
              <mask id="circleMask">
                <circle cx="50%" cy="50%" r="0" data-value-final="820" fill="white" className="mask" style={{ filter: 'url(#displacementFilter)' }} />
              </mask>
            </defs>
            <image xlinkHref={img1} width="896" height="1344" mask="url(#circleMask)" />
          </svg>
          <p className="content__text">As darkness cloaked the forsaken city, the crew huddled together, their eyes darting nervously into the murky abyss.</p>
        </div>
      </div>

      <div className="content-wrap bg-black pb-24">
        <div className="content">
          <div className="title-wrap">
            <span className="title title--up">Sports</span>
            <span className="title title--down"> Facilities</span>
          </div>
        </div>
        <div className="content content--layout content--layout-2">
          <svg className="content__img content__img--2 w-full h-auto" width="1000" height="450" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 450">
            <defs>
              <filter id="displacementFilter2">
                <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="1" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" result="displacement" scale="100" xChannelSelector="R" yChannelSelector="G" />
                <feMorphology operator="dilate" radius="2" result="morph" in="displacement" />
              </filter>
              <mask id="circleMask2">
                <circle cx="50%" cy="50%" r="0" data-value-final="950" fill="white" className="mask" style={{ filter: 'url(#displacementFilter2)' }} />
              </mask>
            </defs>
            <image xlinkHref={img2} width="1000" height="450" mask="url(#circleMask2)" />
          </svg>
          <p className="content__text">At CTGroup, we believe in maintaining a healthy balance between academics and physical fitness. Our campus offers a wide range of sports facilities, including basketball courts, football fields, and a fully equipped gymnasium. Whether you're a competitive athlete or someone who enjoys staying active, there’s something for everyone.</p>
        </div>
      </div>

      <div className="content-wrap bg-black pb-24">
        <div className="content">
          <div className="title-wrap">
            <span className="title title--up">Cultural</span>
            <span className="title title--down">Events</span>
          </div>
        </div>
        <div className="content content--layout content--layout-3">
          <svg className="content__img content__img--3 w-full h-auto" width="1000" height="560" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 560">
            <defs>
              <filter id="displacementFilter3">
                <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="80" result="displacement" xChannelSelector="R" yChannelSelector="G" />
              </filter>
              <mask id="pathMask">
                <path d="M 0 280 Q 500 280 1000 280 Q 500 280 0 280" data-value-final="M 0 280 Q 500 800 1000 280 Q 500 -200 0 280" fill="white" className="mask" style={{ filter: 'url(#displacementFilter3)' }} />
              </mask>
            </defs>
            <image xlinkHref={img3} width="1000" height="560" mask="url(#pathMask)" />
          </svg>
          <p className="content__text">The Forbidden Planet was not merely an ancient world lost to time—it was a prison, a gateway to realms beyond their understanding. They had unwittingly set loose a force that threatened not only their lives but the very fabric of the universe itself. The desert planet, a riddle waiting to be unraveled, held its secrets close, leaving the crew with a lingering sense of awe and dread, a constant reminder of their insignificance in the face of an unforgiving universe.</p>
        </div>
      </div>

      <div className="content-wrap bg-black pb-24">
        <div className="content">
          <div className="title-wrap">
            <span className="title title--up">NCC & </span>
            <span className="title title--down">NSS</span>
          </div>
        </div>
        <div className="content content--layout content--layout-4">
          <svg className="content__img content__img--4 w-full h-auto" width="1400" height="560" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1400 560">
            <defs>
              <filter id="displacementFilter4">
                <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="1" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G" />
              </filter>
              <mask id="circleMask4">
                <circle cx="50%" cy="50%" r="0" data-value-final="770" fill="white" className="mask" style={{ filter: 'url(#displacementFilter4)' }} />
              </mask>
            </defs>
            <image xlinkHref={img4} width="1400" height="560" mask="url(#circleMask4)" />
          </svg>
          <p className="content__text">Sandstorms raged across the barren landscape, their fury obscuring the horizon and leaving a veil of gritty particles that stung the skin. The sun, a distant orb of fiery intensity, cast an unforgiving glare that scorched the unforgiving land.</p>
        </div>
      </div>

      <div className="content-wrap  bg-black pb-36">
        <div className="content">
          <div className="title-wrap">
            <span className="title title--up ex">Campus</span>
            <span className="title title--down ex">Canteen</span>
          </div>
        </div>
        <div className="content content--layout content--layout-5">
          <svg className="content__img content__img--5 w-full h-auto" width="680" height="920" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 680 920">
            <defs>
              <filter id="displacementFilter5">
                <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="150" xChannelSelector="R" yChannelSelector="G" />
              </filter>
              <mask id="circleMask5">
                <circle cx="50%" cy="50%" r="0" data-value-final="580" fill="white" className="mask" style={{ filter: 'url(#displacementFilter5)' }} />
              </mask>
            </defs>
            <image xlinkHref={img5} width="680" height="920" mask="url(#circleMask5)" />
          </svg>
          <p className="content__text">Enjoy a variety of tasty and affordable meals in our vibrant campus canteen.</p>
        </div>
      </div>

      <div className="content-wrap bg-black pb-36">
        <div className="content">
          <div className="title-wrap">
            <span className="title title--up">Skill</span>
            <span className="title title--down">Workshops</span>
          </div>
        </div>
        <div className="content content--layout content--layout-6">
          <svg className="content__img content__img--6 w-full h-auto" width="1000" height="1000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 1000">
            <defs>
              <filter id="displacementFilter6">
                <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" result="displacement" scale="150" xChannelSelector="R" yChannelSelector="G" />
                <feGaussianBlur in="displacement" stdDeviation="10" />
              </filter>
              <mask id="circleMask6">
                <circle cx="50%" cy="50%" r="0" data-value-final="720" fill="white" className="mask" style={{ filter: 'url(#displacementFilter6)' }} />
              </mask>
            </defs>
            <image className="special" xlinkHref={img6} width="1000" height="1000" mask="url(#circleMask6)" />
          </svg>
          <p className="content__text">Visions of a vibrant world, once teeming with life, flickered in her mind's eye, only to be devoured by the relentless sands of time.</p>
        </div>
      </div>

      <div className="content-wrap bg-black ">
        <div className="content">
          <div className="title-wrap">
            <span className="title title--up"> Audi-</span>
            <span className="title title--down">-torium </span>
          </div>
        </div>
        <div className="content content--layout content--layout-7 mb-32">
          <svg className="content__img content__img--7 w-full h-auto" width="1400" height="560" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1400 560">
            <defs>
              <filter id="displacementFilter7">
                <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="1" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="120" xChannelSelector="R" yChannelSelector="G" />
              </filter>
              <mask id="circleMask7">
                <circle cx="50%" cy="50%" r="0" data-value-final="770" fill="white" className="mask" style={{ filter: 'url(#displacementFilter7)' }} />
              </mask>
            </defs>
            <image xlinkHref={img7} width="1400" height="560" mask="url(#circleMask7)" />
          </svg>
          <p className="content__text">The desert world had claimed another fragment of history, another chapter buried beneath the sands of oblivion.</p>
        </div>
      </div>
    </>
  );
}

export default ContentWrap;