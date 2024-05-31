function PerformanceIndicator() {
  return (
    <div
      className='radial-progress'
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      style={{ '--value': '70', '--size': '12rem', '--thickness': '2rem' }}
      role='progressbar'
    >
      70%
    </div>
  );
}

export default PerformanceIndicator;
