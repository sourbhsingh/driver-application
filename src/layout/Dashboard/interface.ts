// interface.ts

export interface DashboardProps {
  importantNotificationsTitle: string;
  navbarProps: {
    mainLogo: string;
    userPicPlaceholder: string;
    greetingHeader: string;
  };
  cardNotificationProps: {
    notificationRedirectButton: string;
  };
  performanceScoreProps: {
    mainTitle: string;
    performanceGrading: {
      excellent: PerformanceGrading;
      veryGood: PerformanceGrading;
      good: PerformanceGrading;
      needsImprovement: PerformanceGrading;
      poor: PerformanceGrading;
    };
  };
}

export interface PerformanceIndicatorProps {
  username: string;
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

export interface PerformanceGrading {
  threshold: number;
  title: string;
  message: string;
}
