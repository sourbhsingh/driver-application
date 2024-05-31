import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  isGlassy?: boolean;
  className?: string;
}

function Card(props: CardProps) {
  const { children, title, isGlassy = false, className } = props;
  return (
    <div
      className={`${'card bg-accent text-primary-content w-full h-full flex justify-center'} ${
        isGlassy ? 'glass' : ''
      }
      ${className}
      `}
    >
      <div className='card-body flex justify-center'>
        {title && <h2 className='card-title'>{title}</h2>}
        {children}
      </div>
    </div>
  );
}

export default Card;
