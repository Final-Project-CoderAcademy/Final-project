import React from "react";
import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Login from "./pages/LogIn";
import Signup from "./pages/SignUp";
import About from "./pages/About";
import BlogList from "./pages/BlogList";
import BlogArticle from "./pages/BlogArticle";
import SitesList from "./pages/SitesList";
import SiteDetail from "./pages/SiteDetail";
import MyHome from "./pages/MyHome";
import AdminUserList from "./pages/AdminUserList";
import AdminSiteList from "./pages/AdminSiteList";

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
            <Route path="/blogs" element={<BlogList />}></Route>
            <Route path="/blogs/:id" element={<BlogArticle />}></Route>
            <Route path="/sites" element={<SitesList />}></Route>
            <Route path="/sites/:id" element={<SiteDetail />}></Route>
            <Route path="/myhome" element={<MyHome />}></Route>
            <Route path="/admin/userlist" element={<AdminUserList />}></Route>
            <Route path="/admin/sitelist" element={<AdminSiteList />}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
