import React from 'react'
import { Dot } from './Dot';
import { SliderContext } from './PopularSlider';

export const Dots = () => {
   const { slidesCount } = React.useContext(SliderContext)

   const renderDots = () => {
      const dots = [];
      for (let i = 0; i < slidesCount; i++) {
        dots.push(<Dot key={`dot-${i}`} number={i} />);
      }
  
      return dots;
    };
  
    return <div className="popular__slider-dots">{renderDots()}</div>;
}