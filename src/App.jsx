import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useNavigate, } from "react-router-dom";
import Loading from "./components/Loading";
import NotFound from "./components/NotFound";


const UserLoginPage = lazy(() => import("./pages/LoginPage"));
const UserProfilePage = lazy(() => import("./pages/ProfilePage"));
const UserDashboardPage = lazy(() => import("./pages/DashboardPage"));


function App() {



  const navigate = useNavigate()


  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login")
    }
  }, [navigate])


  return (

    <div className="App">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/" element={<UserProfilePage />} />
          <Route path="/dashboard" element={<UserDashboardPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>

  );
}

export default App;
