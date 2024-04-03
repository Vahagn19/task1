import { Suspense, lazy } from "react";
import { Route, Routes} from "react-router-dom";
import Loading from "./components/Loading";
import NotFound from "./components/NotFound";

const UserLoginPage = lazy(() => import("./pages/LoginPage"));
const UserProfilePage = lazy(() => import("./pages/ProfilePage"));
const UserDashboardPage = lazy(() => import("./pages/DashboardPage"));


function App() {




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
