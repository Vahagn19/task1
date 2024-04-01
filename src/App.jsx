import { useEffect } from "react";
import { getUserDetails } from "./services/apiService";
import { Route, Routes, useNavigate } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    async function getUser() {
      try{
        const response = await getUserDetails();
        console.log(response);
        if (response) {
          navigate("/dashboard");
        }
      }catch(error){
        console.log(error);
      }
   
    }
    getUser()
  },[]);
  

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
