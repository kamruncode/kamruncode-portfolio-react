import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Articles from "../pages/articles";
import { ContactUs } from "../pages/contact";
import { AboutMe } from "../pages/me/me";
import { Notes } from "../pages/notes";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Articles />} path="/articles" />
      <Route element={<AboutMe />} path="/" />
      <Route element={<Notes />} path="/notes" />
      <Route element={<ContactUs />} path="/contact" />
    </Routes>
  );
};
