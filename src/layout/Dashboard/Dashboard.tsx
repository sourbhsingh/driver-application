import PerformanceIndicator from './PerformanceIndicator/PerformanceIndicator';
import CardCarousel from './components/CardCarousel/CardCarousel';
import CardNotification from './components/CardNotification/CardNotification';
import Navbar from './components/Navbar/Navbar';
import { dashboardProps } from './interface';

const DUMMY_DATA = [
  {
    notificationId: 1,
    notificationTitle: 'Important',
    notificationMessage: 'Nisi sint ea eiusmod ex.',
  },
  {
    notificationId: 3,
    notificationTitle: 'Important',
    notificationMessage: 'Nisi sint ea eiusmod ex.',
  },
  {
    notificationId: 2,
    notificationTitle: 'Important',
    notificationMessage: 'Nisi sint ea eiusmod ex.',
  },
];
function Dashboard(props: dashboardProps) {
  const {
    navbarProps,
    cardNotificationProps,
    importantNotificationsTitle,
    performanceScoreProps,
  } = props;

  const areNotificationsAvailable = DUMMY_DATA.length !== 0;
  return (
    <section className=''>
      <Navbar {...navbarProps} />

      {/* Notifications section */}
      {areNotificationsAvailable && (
        <section className='flex flex-col justify-center items-center  w-full'>
          <h2 className='self-start text-2xl pb-2 pt-2'>
            {importantNotificationsTitle}
          </h2>
          <CardCarousel>
            {DUMMY_DATA.map(
              ({ notificationId, notificationMessage, notificationTitle }) => (
                <CardNotification
                  key={notificationId}
                  notificationTitle={notificationTitle}
                  notificationMessage={notificationMessage}
                  {...cardNotificationProps}
                />
              )
            )}
          </CardCarousel>
        </section>
      )}

      {/* Performance Indicators section */}
      <PerformanceIndicator {...performanceScoreProps} progressScore={73} />
    </section>
  );
}

export default Dashboard;
