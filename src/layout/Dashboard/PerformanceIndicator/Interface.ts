export interface PerformanceIndicatorProps {
  mainTitle: string;
  progressScore: number;
  performanceGradingTreshold: {
    excellent: number;
    veryGood: number;
    good: number;
    needsImprovement: number;
    poor: number;
  };
}
