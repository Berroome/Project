// App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpages from "./pages/Landingpages";
import Contact from "./pages/Contactform";
import Header from "./pages/Header";
import AdminDashboard from "./pages/AdminDashboard";
import LoginPage from "./pages/Login"; // <-- Import
import ProtectedRoute from "./components/ProtectedRoute"; // <-- Import

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landingpages />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Route */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;