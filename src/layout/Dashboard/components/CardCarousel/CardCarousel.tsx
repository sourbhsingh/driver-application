import React from 'react';
import { CardCarouselInterface } from './Interface';

/**
 * CardCarousel component.
 *
 * This component renders a horizontally scrollable carousel containing child elements.
 *
 * @param {CardCarouselInterface} props - The properties for the component.
 * @param {React.ReactNode} props.children - The child elements to display in the carousel.
 *
 * @returns {JSX.Element} The rendered carousel component.
 *
 * @example
 * // Usage example:
 * import React from 'react';
 * import CardCarousel from './CardCarousel';
 *
 * const App = () => (
 *   <CardCarousel>
 *     <div className="card">Card 1</div>
 *     <div className="card">Card 2</div>
 *     <div className="card">Card 3</div>
 *   </CardCarousel>
 * );
 *
 * export default App;
 */
export default function CardCarousel(props: CardCarouselInterface) {
  const { children } = props;

  return (
    <div className='w-full max-w-full p-4 h-auto space-x-4 bg-neutral rounded-box overflow-x-auto'>
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
