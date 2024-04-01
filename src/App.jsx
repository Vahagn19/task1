import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";


function App() {




  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="dashboard" element={<DashboardPage />} />
      </Routes>
    </div>

  );
}

export default App;
