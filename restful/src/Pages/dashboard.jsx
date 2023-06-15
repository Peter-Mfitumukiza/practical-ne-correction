import Sidebar from '../components/sidebar';
import DashboardContent from '../components/dashboardContent';

const Dashboard = () => {
  return (
    <div className="container-fluid" style={{ paddingLeft: 0}}>
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <DashboardContent />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
