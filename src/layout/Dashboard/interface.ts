export interface dashboardProps {
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
    progressScore: number;
    performanceGrading: {
      excellent: PerformanceGrading;
      veryGood: PerformanceGrading;
      good: PerformanceGrading;
      needsImprovement: PerformanceGrading;
      poor: PerformanceGrading;
    };
  };
}

interface PerformanceGrading {
  threshold: number;
  title: string;
  message: string;
}
