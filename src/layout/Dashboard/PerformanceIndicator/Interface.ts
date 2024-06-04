interface PerformanceGrading {
  threshold: number;
  title: string;
  message: string;
}
export interface PerformanceIndicatorProps {
  mainTitle: string;
  progressScore: number;
  performanceGrading: {
    excellent: PerformanceGrading;
    veryGood: PerformanceGrading;
    good: PerformanceGrading;
    needsImprovement: PerformanceGrading;
    poor: PerformanceGrading;
  };
}
