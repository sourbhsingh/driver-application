import { PerformanceIndicatorProps } from './interface';
import Card from '../../../UI/Card/Card';
import RadialProgress from '../../../UI/RadialProgress/RadialProgress';

function PerformanceIndicator(props: PerformanceIndicatorProps) {
  const { mainTitle, progressScore = 50, performanceGradingTreshold } = props;

  let colorClueIndicator = '';

  if (performanceGradingTreshold) colorClueIndicator = 'bg-lima-500';
  return (
    <section className='flex justify-center mt-7 w-full mx-auto items-center text-center'>
      <Card className='glass bg-red-700' isCentered>
        <h2 className='text-3xl mb-7'>{mainTitle}</h2>
        <RadialProgress
          className='color-red-500 text-center m-auto progress-primary bg-blue-500'
          progressScore={progressScore}
        />
      </Card>
    </section>
  );
}

export default PerformanceIndicator;
