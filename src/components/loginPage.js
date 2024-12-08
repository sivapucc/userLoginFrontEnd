import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Link, useNavigate } from "react-router-dom";
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);

    // Validate inputs
    if (!email || !password) {
      setError("Please fill in all the fields.");
      return;
    }
    const userDetails = {
      email,
      password,
    };

    const response = await fetch(
      `https://user-login-back-end-gxh6.vercel.app/api/login`,
      {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (data.token) {
      setError(data.message);
      setToken(data.token);
      setUserName(data.useName);
      localStorage.setItem("token", data.token);
    } else {
      setEmail("");
      setPassword("");
      setError(data.message);
      return;
    }
  }
  const handleClose = (e) => {
    console.log(e);
    if (error === "Logedin sucessfully....") {
      navigate("/dashboard", { state: { token: token, user: userName } });
    }
    setEmail("");
    setPassword("");
    setError("");
    e.target.form.reset();
    return;
  };
  return (
    <div className="loginpageContainer">
      <div className="loginPage">
        <h3 className="welcome-text">""</h3>
        <Card
          border=""
          style={{ width: "28rem", height: "40rem", borderRadius: "20px" }}
        >
          <img
            className="loginImg"
            src="https://t3.ftcdn.net/jpg/01/22/49/12/360_F_122491286_MpvBYUY367LCCCLJ9pSppjJQpGSQEHVQ.jpg"
            alt="nature"
          />

          <Card.Text style={{ paddingTop: "20px" }}>
            <h2>User Login</h2>
          </Card.Text>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control
                  size="lg"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="link-container">
                  <Card.Link href="#" className="link1">
                    <Link to="/signup">Create Account</Link>
                  </Card.Link>{" "}
                  <Card.Link
                    href="#"
                    className="link2"
                    onClick={() => navigate("*")}
                  >
                    Forgot Password?
                  </Card.Link>
                </div>
              </Form.Group>
              <div className="buttonAlinment">
                <Button
                  variant="success"
                  onClick={(e) => handleSubmit(e)}
                  style={{ marginRight: "20px", padding: "10px" }}
                >
                  Login
                </Button>
                <Button
                  variant="danger"
                  style={{ marginLeft: "20px", padding: "10px" }}
                  onClick={() => navigate("/")}
                >
                  Cancel
                </Button>
              </div>
              <>
                {error ? (
                  <Alert
                    variant={
                      error === "Logedin sucessfully...." ? "success" : "danger"
                    }
                  >
                    <p>{error}</p>
                    <hr />
                    <div className="d-flex justify-content-end">
                      <Button
                        onClick={(e) => handleClose(e)}
                        variant="outline-success"
                      >
                        Close
                      </Button>
                    </div>
                  </Alert>
                ) : (
                  ""
                )}
              </>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
