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
    notificationId: 2,
    notificationTitle: 'Important',
    notificationMessage: 'Nisi sint ea eiusmod ex.',
  },
];

function Dashboard(props: dashboardProps) {
  const { navbarProps, cardNotificationProps } = props;
  return (
    <section className='m-10'>
      <Navbar {...navbarProps} />

      {/* Notifications section */}
      <section className='flex justify-center'>
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
    </section>
  );
}

export default Dashboard;
