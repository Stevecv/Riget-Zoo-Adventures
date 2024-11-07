import './App.css';
import {BrowserRouter, Link, Route, Router, Routes} from 'react-router-dom';
import SignUp from "./SignUp";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import TicketsChoice from "./TicketsChoice";
import ZooBooking from "./ZooBooking";
import HotelBooking from "./HotelBooking";

function ButtonLink({ to, children }) {
    return <link to={to}><button>{children}</button></link>;
}

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route index element={<Home />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="login" element={<Login />} />
              <Route path="logout" element={<Logout />} />
              <Route path="tickets" element={<TicketsChoice />} />
              <Route path="zoobooking" element={<ZooBooking />} />
              <Route path="hotelbooking" element={<HotelBooking />} />
          </Routes>

      </BrowserRouter>
  );
}

export default App;
