import { dashboardProps } from './interface';

function Dashboard(props: dashboardProps) {
  const { greetingHeader } = props;
  return (
    <div>
      <h1>Dasboard</h1>
      <p>{greetingHeader}</p>
    </div>
  );
}

export default Dashboard;
