import { CardCarouselInterface } from './Interface';

export default function CardCarousel(props: CardCarouselInterface) {
  const { children } = props;
  return (
    <div className='carousel carousel-center max-w-md p-4 space-x-4  rounded-box'>
      <div className='carousel-item'>{children}</div>
    </div>
  );
}
