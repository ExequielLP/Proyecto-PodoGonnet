import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Servicios from "../pages/Servicios";
import Dashboard from "./../pages/Dashboard";

const AuthRouters = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/admin" element={<Dashboard />} />
        {/* <Route path="/servicio" element={<Servicios />} /> */}
        <Route path="/servicio/:id" element={<Servicios />} />
      </Routes>
    </>
  );
};

export default AuthRouters;
