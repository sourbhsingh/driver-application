import { PerformanceIndicatorProps } from './Interface';

function PerformanceIndicator(props: PerformanceIndicatorProps) {
  const { className } = props;
  return (
    <div
      className={`radial-progress ${className}`}
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
