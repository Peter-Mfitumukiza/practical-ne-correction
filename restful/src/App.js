import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from './Pages/signup';
import LoginPage from './Pages/login';
import Dashboard from './Pages/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" exact element={<SignupPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path='/dashboard' exact element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
