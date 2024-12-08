import { Login } from "./loginPage";
import { Signup } from "./signupPage";
import { Link, Route, Routes } from "react-router-dom";

export function Bases() {
  return (
    <div className="baseContainer">
      <div className="heading">
        <h1>Welecome to our Website</h1>
      </div>
      <ul className="listItems">
        <Link
          to="/login"
          style={{
            listStyle: "none",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#E2F4FD",
          }}
        >
          <li
            style={{
              fontSize: "30px",
              margin: "5px",
              padding: "2px",
              border: "3px solid white",
              borderRadius: "8px",
            }}
            className="logLink"
          >
            login
          </li>
        </Link>
        <Link
          to="/signup"
          style={{
            listStyle: "none",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#E2F4FD",
          }}
        >
          <li
            style={{
              fontSize: "30px",
              margin: "5px",
              padding: "2px",
              border: "3px solid white",
              borderRadius: "8px",
            }}
            className="logLink"
          >
            signup
          </li>
        </Link>
      </ul>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
