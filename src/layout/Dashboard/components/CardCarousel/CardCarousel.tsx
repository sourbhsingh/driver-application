import React from 'react';
import { CardCarouselInterface } from './Interface';

export default function CardCarousel(props: CardCarouselInterface) {
  const { children } = props;

  return (
    <div className='carousel carousel-center max-w-xl p-4 space-x-4 bg-neutral rounded-box'>
      {React.Children.map(children, (child, index) => (
        <div className='carousel-item' key={index}>
          {child}
        </div>
      ))}
    </div>
  );
}
