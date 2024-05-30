import CardCarousel from './components/CardCarousel/CardCarousel';
import CardNotification from './components/CardNotification/CardNotification';
import Navbar from './components/Navbar/Navbar';
import { dashboardProps } from './interface';

function Dashboard(props: dashboardProps) {
  const { navbarProps, cardNotificationProps } = props;
  return (
    <section className='m-10'>
      <Navbar {...navbarProps} />
      <section className='flex justify-center'>
        <CardCarousel>
          <CardNotification {...cardNotificationProps} />
        </CardCarousel>
      </section>
    </section>
  );
}

export default Dashboard;
