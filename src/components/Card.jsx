import React from 'react';

function Card({ href, imgSrc, title }) {
  return (
    <div className="card">
      <a href={href} className="card__image" style={{ backgroundImage: `url(${imgSrc})` }}></a>
      <h3 className="card__title"><a href={href}>{title}</a></h3>
    </div>
  );
}

export default Card;