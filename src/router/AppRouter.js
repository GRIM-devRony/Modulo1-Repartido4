import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Contacto from "../pages/Contacto/Contacto";
import Login from "../pages/login-page/Login";
import TareaPage from "../pages/tarea-page/TareaPage";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Agradecimiento from "../pages/agradecimiento/Agradecimiento";
import Home from "../pages/Home/Home";

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to={"/login"} replace />;
  }

  return (
    <>
      <Header />
      {children};
      <Footer />
    </>
  );
};

const AppRouter = () => {
  const location = useLocation();
  const user = localStorage.getItem("user") || false;
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        path="tareas"
        element={
          <ProtectedRoute user={user}>
            <TareaPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="contacto"
        element={
          <ProtectedRoute user={user}>
            <Contacto />
          </ProtectedRoute>
        }
      />
      <Route
        path="agradecimiento/:name"
        element={
          <ProtectedRoute user={user}>
            <Agradecimiento />
          </ProtectedRoute>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default AppRouter;
