import Navbar from './components/Navbar/Navbar';
import { dashboardProps } from './interface';

function Dashboard(props: dashboardProps) {
  const { navbarProps } = props;
  return (
    <section className='m-10'>
      <Navbar {...navbarProps} />
    </section>
  );
}

export default Dashboard;
