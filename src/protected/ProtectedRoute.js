import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const auth = {
    token: localStorage.getItem("token"),
  };
  return auth.token ? <Outlet /> : <Navigate to={"/login"} />;
}

export default ProtectedRoute;
