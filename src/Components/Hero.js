import React from 'react';

function Hero(props) {
  const { imageSrc, heading, subHeading, buttonText } = props.data;

  return (
    <div className="hero">
      <img src={imageSrc} alt="Hero"/>
      <h1>{heading}</h1>
      <h2>{subHeading}</h2>
      <button>{buttonText}</button>
    </div>
  );
}

export default Hero;
