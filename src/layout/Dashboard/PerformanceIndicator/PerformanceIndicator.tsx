import { PerformanceIndicatorProps } from './interface';
import Card from '../../../UI/Card/Card';
import RadialProgress from '../../../UI/RadialProgress/RadialProgress';

function PerformanceIndicator(props: PerformanceIndicatorProps) {
  const { mainTitle, progressScore = 50, performanceGrading } = props;

  let colorClueIndicator = '';
  let title = '';
  let message = '';

  if (progressScore === performanceGrading.excellent.threshold) {
    colorClueIndicator = 'bg-lime-500';
    title = performanceGrading.excellent.title;
    message = performanceGrading.excellent.message;
  } else if (progressScore >= performanceGrading.veryGood.threshold) {
    colorClueIndicator = 'bg-lime-300';
    title = performanceGrading.veryGood.title;
    message = performanceGrading.veryGood.message;
  } else if (progressScore >= performanceGrading.good.threshold) {
    colorClueIndicator = 'bg-amber-400';
    title = performanceGrading.good.title;
    message = performanceGrading.good.message;
  } else if (progressScore >= performanceGrading.needsImprovement.threshold) {
    colorClueIndicator = 'bg-orange-400';
    title = performanceGrading.needsImprovement.title;
    message = performanceGrading.needsImprovement.message;
  } else if (progressScore >= performanceGrading.poor.threshold) {
    colorClueIndicator = 'bg-red-500';
    title = performanceGrading.poor.title;
    message = performanceGrading.poor.message;
  } else {
    colorClueIndicator = 'bg-red-700';
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
