import { useLocation, useNavigate } from "react-router-dom";

export function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="welcomeContainer">
      <h1>
        Welcome <span className="nameContent"> Mr.{location.state.user}</span>
      </h1>
      <div>
        <button className="logoutBtn" onClick={() => navigate("/")}>
          Logout
        </button>
      </div>
    </div>
  );
}
