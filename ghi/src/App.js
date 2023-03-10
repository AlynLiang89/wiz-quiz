import { AuthProvider, useToken } from "./auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogInForm from "./Login";
import SignupForm from "./Signup";
import HomePage from "./homepage";
import Quiz from "./components/quiz";
import Leaderboard from "./leaderboard";
import UpdateProfile from "./update";

function GetToken() {
  useToken();
  return null;
}

function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, "");

  return (
    <div className="container">
      <BrowserRouter basename={basename}>
        <AuthProvider>
          <GetToken />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LogInForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/wiz-quiz/leaderboard" element={<Leaderboard />} />
            <Route path="/update" element={<UpdateProfile />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
