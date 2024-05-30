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
  const { navbarProps, cardNotificationProps } = props;

  const areNotificationsAvailable = DUMMY_DATA.length !== 0;
  return (
    <section className='m-10'>
      <Navbar {...navbarProps} />

      {/* Notifications section */}
      {areNotificationsAvailable && (
        <section className='flex flex-col justify-center items-center  w-full'>
          <h2 className='self-start text-2xl pb-2 pt-2'>
            Important Notifications
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
    </section>
  );
}

export default Dashboard;
