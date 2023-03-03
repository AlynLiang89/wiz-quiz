import { useEffect, useState } from "react";
import { AuthProvider, useToken } from "./auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogInForm from "./Login";
import SignupForm from "./Signup";
import HomePage from "./homepage";
import Quiz from "./components/quiz";

function GetToken() {
  // Get token from cookie only if logged in 
  useToken();
  return null;
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <GetToken />
          <div className="container"></div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LogInForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
          <div />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
