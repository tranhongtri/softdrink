import React from 'react';
import Carousel from 'components/hero-carousel';
import SliderComponent from './slider-component';

const data = [
  { id: 1, background: '/images/slider_01.jpg', children: <SliderComponent /> },
  { id: 2, background: '/images/slider_02.jpg', children: <SliderComponent /> },
];

export default function HeroBlock() {
  return (
    <div className="w-full relative min-h-480px">
      <Carousel data={data} />
    </div>
  );
}
