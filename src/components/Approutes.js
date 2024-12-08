import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./loginPage";
import { Signup } from "./signupPage";
import { Bases } from "./BaseComponent";
import { Dashboard } from "./Dashboard";
import { Pagenotfound } from "./Pagenotfound";

const Approutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Bases />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Pagenotfound />} />
    </Routes>
  </BrowserRouter>
);

export default Approutes;
