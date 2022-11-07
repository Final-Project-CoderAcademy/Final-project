import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Login from "./pages/LogIn";
import Register from "./pages/Register";
import About from "./pages/About";
import BlogList from "./pages/BlogList";
import BlogArticle from "./pages/BlogArticle";
import SitesList from "./pages/SitesList";
import SiteDetail from "./pages/SiteDetail";
import MyHome from "./pages/MyHome";
import AdminUserList from "./pages/AdminUserList";
import AdminSiteList from "./pages/AdminSiteList";
import BlogForm from "./pages/BlogForm";
import SiteForm from "./pages/SiteForm";

function App() {
  return (
    <Router>
      <NavBar />
      <main className="pb-3">
        <>
          <Routes>
            <Route path="/" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>

            <Route path="/blogs" element={<BlogList />}></Route>
            <Route path="/blogs/:id" element={<BlogArticle />}></Route>
            <Route path="/blogs/:id/edit" element={<BlogForm />}></Route>

            <Route path="/sites" element={<SitesList />}></Route>
            <Route path="/sites/:id" element={<SiteDetail />}></Route>
            <Route path="/sites/:id/edit" element={<SiteForm />}></Route>

            <Route path="/myhome" element={<MyHome />}></Route>
            <Route path="/admin/userlist" element={<AdminUserList />}></Route>
            <Route path="/admin/sitelist" element={<AdminSiteList />}></Route>
          </Routes>
        </>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
