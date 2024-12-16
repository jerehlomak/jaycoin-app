import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import './App.css';
import Home from './screens/Home';
import Daily from './screens/Daily'
import Earn from './screens/Earn'
import AirDrops from './screens/AirDrops'
import Referrals from './screens/Referrals'
import BottomNavigation from "./components/BottomNavigation";

function App() {
  return (
    <Router>
      <BottomNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/shares" element={<Referrals />} />
        <Route path="/airdrop" element={<AirDrops />} />
      </Routes>
    </Router>
  );
}

export default App;
