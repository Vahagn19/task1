import Sidebar from "../../../components/Sidebar";
import Dashboard from "../../../components/Dashboard/ui/Dashboard";
import styles from './dashboardPage.module.css'


function DashboardPage() {


  return (
    <div className={styles.container}>
      <Sidebar />
      <Dashboard />
   
    </div>
  );
}

export default DashboardPage;
