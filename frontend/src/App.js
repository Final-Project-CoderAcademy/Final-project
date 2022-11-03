import React from "react";
import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Login from "./pages/LogIn";
import Signup from "./pages/SignUp";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <NavBar />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
