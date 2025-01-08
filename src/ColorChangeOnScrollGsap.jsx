import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';
import Head from 'next/head';
import FAQ from './components/pages/FAQ';
import AwardsSection from './components/pages/AwardsSection';
import PlacementSection from "./PlacementSection";
import Testimonial from "./components/pages/Testimonial";
import Main from './components/Main';
import Header from './components/Header';
import { initialize } from './smoothScroll';
import './App.css'

gsap.registerPlugin(ScrollTrigger);

function ColorChangeOnScrollGsap() {
  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    const scrollBar = Scrollbar.init(document.querySelector('.main'), {
      damping: 0.06,
      delegateTo: document,
      alwaysShowTracks: false,
      speed: 3,
    });
    ScrollTrigger.defaults({
      scroller: '.main',
    });
    ScrollTrigger.scrollerProxy('.main', {
      scrollTop(value) {
        if (arguments.length) {
          scrollBar.scrollTop = value;
        }
        return scrollBar.scrollTop;
      },
    });

    scrollBar.addListener(ScrollTrigger.update);

    const sectionColor = document.querySelectorAll('[data-bgcolor]');
    sectionColor.forEach((colorSection, i) => {
      const prevBgColor = i === 0 ? '' : sectionColor[i - 1].dataset.bgcolor;
      const prevTextColor =
        i === 0 ? '' : sectionColor[i - 1].dataset.textcolor;

      ScrollTrigger.create({
        trigger: colorSection,
        scroller: '.main',
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () =>
          gsap.to('.main', {
            backgroundColor: colorSection.dataset.bgcolor,
            color: colorSection.dataset.textcolor,
            overwrite: 'auto',
          }),
        onLeaveBack: () =>
          gsap.to('.main', {
            backgroundColor: prevBgColor,
            color: prevTextColor,
            overwrite: 'auto',
          }),
      });
    });

    return () => { };
  }, []);

  return (
    <div className="main h-screen w-full flex flex-col overflow-auto">
      <Head>
        <title>Color Change On Scroll Gsap</title>
      </Head>
      <section
        className="min-h-screen w-screen relative flex items-center justify-center"
        data-bgcolor="#ff0000"  // Red
        data-textcolor="#ffffff"
      >
        <AwardsSection />
      </section>
      <section
        className="min-h-screen w-screen relative flex items-center justify-center"
        data-bgcolor="#0000ff"  // Blue
        data-textcolor="#d0b6c0"
      >
        <PlacementSection />
      </section>
      <section
        className="min-h-screen w-screen flex items-center justify-center"
        data-bgcolor="#800080"  // Purple
        data-textcolor="#c2c1b3"
      >
        {/* <Header /> */}
        {/* <Main /> */}
      </section>
      <section
        className="min-h-screen w-screen relative"
        data-bgcolor="#032F35"
        data-textcolor="#b3c2ba"
      >
        <Testimonial />
      </section>
      <section
        className="min-h-screen w-screen relative flex items-center justify-center px-32"
        data-bgcolor="#582e1a"
        data-textcolor="#ffffff"
      >
        <FAQ />

      </section>
    </div>
  );
}

export default ColorChangeOnScrollGsap;