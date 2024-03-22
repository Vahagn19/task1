import Profile from "../../../components/Profile/ui/Profile";
import Sidebar from "../../../components/Sidebar";
import styles from './profilePage.module.css'

function ProfilePage() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Profile />
    </div>
  );
}

export default ProfilePage;
