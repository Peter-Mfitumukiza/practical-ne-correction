import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from './Pages/signup';
import LoginPage from './Pages/login';
import Vehicles from './Pages/vehicles';
import Dashboard from './Pages/dashboard';
import NewVehiclePage from './Pages/newVehicle';
import OwnersPage from './Pages/owners';
import NewOwnerPage from './Pages/newOwner';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={ <Dashboard/> } />
        <Route path="/signup" exact element={<SignupPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path='/dashboard' exact element={<Dashboard />} />
        <Route path="/vehicles" exact element={<Vehicles />} />
        <Route path='/newVehicle' exact element={<NewVehiclePage />} />
        <Route path='/owners' exact element={<OwnersPage />} />
        <Route path='/newOwner' exact element={<NewOwnerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
