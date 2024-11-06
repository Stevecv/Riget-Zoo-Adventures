import './App.css';
import {BrowserRouter, Link, Route, Router, Routes} from 'react-router-dom';
import SignUp from "./SignUp";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";

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
          </Routes>

      </BrowserRouter>
  );
}

export default App;
