import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PerformanceIndicator from './PerformanceIndicator/PerformanceIndicator';
import CardCarousel from './components/CardCarousel/CardCarousel';
import CardNotification from './components/CardNotification/CardNotification';
import Navbar from './components/Navbar/Navbar';
import { DashboardProps } from './interface';
import TrainingCard from './components/CardCarousel/TrainingCard'; // Import TrainingCard


function Dashboard(props: DashboardProps) {
  const { navbarProps, cardNotificationProps, importantNotificationsTitle, performanceScoreProps } = props;
  const [notifications, setNotifications] = useState<any[]>([]);
  const [performanceThreshold, setPerformanceThreshold] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve logged-in user data from localStorage
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);

      // Set notifications and performance threshold based on logged-in user
      setNotifications(user.notifications);
      setPerformanceThreshold(user.performanceThreshold);
    } else {
      navigate('/login'); // Redirect to login if user not authenticated
    }
  }, [navigate]);

  return (
    <section>
      <Navbar {...navbarProps} />

      {/* Notifications section */}
      {notifications.length > 0 && (
        <section className="flex flex-col justify-center items-center w-full">
          <h2 className="self-start text-2xl pb-2 pt-2">{importantNotificationsTitle}</h2>
          <CardCarousel>
            {notifications.map((notification, index) => (
              <CardNotification
                key={index + 1}
                notificationTitle={notification.title}
                notificationMessage={notification.message}
                {...cardNotificationProps}
              />
            ))}
          </CardCarousel>
        </section>
      )}

      {/* Performance Indicators section */}
      <PerformanceIndicator {...performanceScoreProps} progressScore={performanceThreshold} />
      <section className="mt-8">
        <TrainingCard />
      </section>
    </section>
  );
}

export default Dashboard;
