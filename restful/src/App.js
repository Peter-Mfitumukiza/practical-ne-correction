import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignupPage from './Pages/signup';
import LoginPage from './Pages/login';
import Vehicles from './Pages/vehicles';
import Dashboard from './Pages/dashboard';
import NewVehiclePage from './Pages/newVehicle';
import OwnersPage from './Pages/owners';
import NewOwnerPage from './Pages/newOwner';
import ProtectedRoute from './components/ProtectedRoute';
import authService from './services/authService';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Dashboard />} />
        <Route path="/signup" exact element={authService.isAuthenticated() ? <Navigate to="/" /> : <SignupPage />} />
        <Route path="/login" exact element={authService.isAuthenticated() ? <Navigate to="/" /> : <LoginPage />} />
        <Route path='/dashboard' exact element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
        <Route path="/vehicles" exact element={ <ProtectedRoute> <Vehicles /> </ProtectedRoute> } />
        <Route path='/newVehicle' exact element={ <ProtectedRoute> <NewVehiclePage /> </ProtectedRoute> } />
        <Route path='/owners' exact element={ <ProtectedRoute> <OwnersPage /> </ProtectedRoute> } />
        <Route path='/newOwner' exact element={  <ProtectedRoute> <NewOwnerPage /> </ProtectedRoute> } />
      </Routes>
    </Router>
  );
}

export default App;
