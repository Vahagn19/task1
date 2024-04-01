import { Suspense, lazy } from "react";
import { Route, Routes, } from "react-router-dom";
import Loading from "./components/Loading";



const UserLoginPage = lazy(() => import("./pages/LoginPage"));
const UserProfilePage = lazy(() => import("./pages/ProfilePage"));
const UserDashboardPage = lazy(() => import("./pages/DashboardPage"));


function App() {


  return (

    <div className="App">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<UserLoginPage />} />
          <Route path="profile" element={<UserProfilePage />} />
          <Route path="dashboard" element={<UserDashboardPage />} />
        </Routes>
      </Suspense>
    </div>

  );
}

export default App;
