import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./page/admin/regis_login/Register";
import Login from "./page/admin/regis_login/Login";
import Home from "./page/Home";
import DataContact from "./page/admin/contact/DataContact";
import Dashboard from "./page/admin/regis_login/Dashboard";
import TambahDataContact from "./page/admin/contact/TambahDataContact";
import UpdateDataContact from "./page/admin/contact/UpdateDataContact";
import About from "./page/admin/about/DataAbout";
import TambahDataAbout from "./page/admin/about/TambahDataAbout";
import UpdateDataAbout from "./page/admin/about/UpdateDataAbout";
import Logout from "./page/admin/regis_login/Logout";
import ProtectedRoute from "./protected/ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashcontact" element={<DataContact />} />
            <Route path="/dashaddcontact" element={<TambahDataContact />} />
            <Route path="dashcontact/edit/:id" element={<UpdateDataContact />} />
            <Route path="/dashabout" element={<About />} />
            <Route path="/dashaddabout" element={<TambahDataAbout />} />
            <Route path="dashabout/editabout/:id" element={<UpdateDataAbout />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
