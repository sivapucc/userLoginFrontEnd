import { useNavigate } from "react-router-dom";

export function Pagenotfound() {
  const navigate = useNavigate();
  return (
    <div className="nanPage">
      <div>
        <span style={{ fontSize: "2rem", fontWeight: "bold" }}>404</span>
        <span>!Page Not found</span>
      </div>
      <button
        onClick={() => navigate("/")}
        className="logoutBtn"
        style={{ minWidth: "200px" }}
      >
        Back to homePage
      </button>
    </div>
  );
}
