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
    performanceGradingTreshold: {
      excellent: number;
      veryGood: number;
      good: number;
      needsImprovement: number;
      poor: number;
    };
  };
}
