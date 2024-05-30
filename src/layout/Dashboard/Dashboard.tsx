import { dashboardProps } from './interface';

function Dashboard(props: dashboardProps) {
  const { greetingHeader } = props;
  return (
    <section className='mt-6'>
      <h1>Dasboard</h1>
      <p>{greetingHeader}</p>
    </section>
  );
}

export default Dashboard;
