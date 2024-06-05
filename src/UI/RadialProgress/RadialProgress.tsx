import { RadialProgressProps } from './Interface';

/**
 * PerformanceIndicator component.
 *
 * This component renders a radial progress indicator with a given progress score.
 *
 * @param {PerformanceIndicatorProps} props - The properties for the component.
 * @param {string} props.className - Additional class name(s) to apply to the component.
 * @param {number} props.progressScore - The progress score to display, which sets the value of the radial progress.
 *
 * @returns {JSX.Element} The rendered radial progress indicator.
 *
 * @example
 * // Usage example:
 * import React from 'react';
 * import PerformanceIndicator from './PerformanceIndicator';
 *
 * const App = () => (
 *   <div>
 *     <RadialProgress className="custom-class" progressScore={75} />
 *   </div>
 * );
 *
 * export default App;
 */

function RadialProgress(props: RadialProgressProps) {
  const { className, progressScore } = props;
  return (
    <div
      className={`radial-progress ${className}`}
      style={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        '--value': progressScore,
        '--size': '12rem',
        '--thickness': '2rem',
      }}
      role='progressbar'
    >
      {progressScore}%
    </div>
  );
}

export default RadialProgress;
