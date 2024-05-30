import React from 'react';
import { CardCarouselInterface } from './Interface';

export default function CardCarousel(props: CardCarouselInterface) {
  const { children } = props;

  return (
    <div className='w-full max-w-full p-4 h-80 space-x-4 bg-neutral rounded-box overflow-x-auto'>
      <div className='flex space-x-4 h-72 '>
        {React.Children.map(children, (child, index) => (
          <div className='carousel-item flex-shrink-0' key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
