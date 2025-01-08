import React from 'react';
import ContentWrap from './ContentWrap';

function Main() {
  return (
    <main>
      <h1 className="head text-center bg-black text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-slate-300 font-bold py-14 underline">
        Campus Life
      </h1>
      <ContentWrap />
    </main>
  );
}

export default Main;