import './App.css';
import Navbar from "./Navbar";
import lion from './/images/lion.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock, faHippo, faPerson, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import {BrowserRouter, Link, Route, Router, Routes} from 'react-router-dom';
import SignUp from "./SignUp";
import Home from "./Home";
import Login from "./Login";

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
          </Routes>

      </BrowserRouter>
  );
}

export default App;
