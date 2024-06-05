import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  isCentered?: boolean;
  className?: string;
}

function Card(props: CardProps) {
  const { children, title, isCentered = false, className } = props;
  return (
    <div
      className={`${'card bg-accent text-primary-content w-full h-full flex justify-center'} ${
        isCentered ? 'mx-auto' : ''
      }
      ${className}
      `}
    >
      <div
        className={`card-body flex justify-center ${
          isCentered ? 'mx-auto' : ''
        }`}
      >
        {title && <h2 className='card-title'>{title}</h2>}
        {children}
      </div>
    </div>
  );
}

export default Card;
