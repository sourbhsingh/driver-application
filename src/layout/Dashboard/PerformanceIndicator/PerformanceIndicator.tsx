import { PerformanceIndicatorProps } from './Interface';
import Card from '../../../UI/Card/Card';
import RadialProgress from '../../../UI/RadialProgress/RadialProgress';

/**
 * PerformanceIndicator component to display a performance score with
 * associated messages and a radial progress indicator.
 *In
 * @param {PerformanceIndicatorProps} props - The properties object.
 * @param {string} props.mainTitle - The main title displayed above the indicator.
 * @param {number} [props.progressScore=50] - The performance score, defaults to 50.
 * @returns {JSX.Element} The rendered PerformanceIndicator component.
 **/

// colors.ts
enum PerformanceColors {
  Excellent = 'bg-lime-500',
  VeryGood = 'bg-lime-300',
  Good = 'bg-amber-400',
  NeedsImprovement = 'bg-orange-400',
  Poor = 'bg-red-500',
  Critical = 'bg-red-700',
}

function PerformanceIndicator(props: PerformanceIndicatorProps) {
  const { mainTitle, progressScore = 50, performanceGrading } = props;

  let colorClueIndicator = '';
  let title = '';
  let message = '';

  if (progressScore === performanceGrading.excellent.threshold) {
    colorClueIndicator = PerformanceColors.Excellent;
    title = performanceGrading.excellent.title;
    message = performanceGrading.excellent.message;
  } else if (progressScore >= performanceGrading.veryGood.threshold) {
    colorClueIndicator = PerformanceColors.VeryGood;
    title = performanceGrading.veryGood.title;
    message = performanceGrading.veryGood.message;
  } else if (progressScore >= performanceGrading.good.threshold) {
    colorClueIndicator = PerformanceColors.Good;
    title = performanceGrading.good.title;
    message = performanceGrading.good.message;
  } else if (progressScore >= performanceGrading.needsImprovement.threshold) {
    colorClueIndicator = PerformanceColors.NeedsImprovement;
    title = performanceGrading.needsImprovement.title;
    message = performanceGrading.needsImprovement.message;
  } else if (progressScore >= performanceGrading.poor.threshold) {
    colorClueIndicator = PerformanceColors.Poor;
    title = performanceGrading.poor.title;
    message = performanceGrading.poor.message;
  } else {
    colorClueIndicator = PerformanceColors.Critical;
    title = 'Critical';
    message = 'Performance is critical low';
  }
  return (
    <section className='flex justify-center mt-7 w-full mx-auto items-center text-center'>
      <Card className={`glass ${colorClueIndicator}`} isCentered>
        <h2 className='text-3xl mb-7'>{mainTitle}</h2>
        <RadialProgress
          className='color-red-500 text-center m-auto progress-primary text-2xl'
          progressScore={progressScore}
        />
        <div className='w-96 mt-7'>
          <h2 className='text-4xl'>{title}</h2>
          <p className='text-2xl'>{message}</p>
        </div>
      </Card>
    </section>
  );
}

export default PerformanceIndicator;
