import React from "react";
import Nav from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./dashboard/Dashboard.jsx";
import Login from "./dashboard/Login.jsx";
import Profile from "./dashboard/profile.jsx";
import Not_Found from "./pages/NotFound.jsx";
import Random from "./pages/Random_course.jsx";
import { Route, Routes } from "react-router-dom";

let App = () => {

  return (
    < div >
      <Nav />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />}>
            <Route path=":id" element={<Random />} />
          </Route>
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path="/Dashboard" element={<Dashboard />}>
            <Route path="Profile" element={<Profile />} />
            <Route path="Login" element={<Login />} />
          </Route>


          <Route path="/*" element={<Not_Found />} />
        </Routes>
      </main>

      <Footer />
    </div >
  )
}

export default App;