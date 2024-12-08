import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Link, useNavigate } from "react-router-dom";

export function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();

    // Validate inputs
    if (!email || !password || !name || !contact) {
      setMessage("Please fill in all the fields.");
      setIsError(true);
      return;
    }

    const userDetails = {
      email,
      password,
      name,
      contact,
    };

    try {
      const response = await fetch(
        `https://user-login-back-end-gxh6.vercel.app/api/signup`,
        {
          method: "POST",
          body: JSON.stringify(userDetails),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data);
      if (data.token) {
        setMessage("Signup successful! Welcome to our platform.");
        setIsError(false);
        localStorage.setItem("token", data.token);

        setEmail("");
        setName("");
        setContact("");
        setPassword("");
      } else {
        setMessage(data.message || "Signup failed. Please try again.");
        setIsError(true);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
      setIsError(true);
    }
  }

  const handleClose = () => {
    if (message === "Signup successful! Welcome to our platform.") {
      setMessage("");
      navigate("/login");
    }
    setMessage("");
  };

  return (
    <div className="signupPageContainer">
      <div className="signupPage">
        <h3 className="welcome-text">.</h3>
        <Card
          border=""
          style={{ width: "28rem", height: "48rem", borderRadius: "20px" }}
        >
          <img
            className="signupImg"
            src="https://png.pngtree.com/background/20221027/original/pngtree-interfaces-related-to-computer-operating-systems-picture-image_1924246.jpg"
            alt="nature"
          />
          <Card.Text style={{ paddingTop: "20px" }}>
            <h2>Signup to continue</h2>
          </Card.Text>
          <Card.Body>
            <Form autoComplete="off">
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupContact">
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Enter contact number"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control
                  size="lg"
                  type="password"
                  placeholder="Password"
                  name="userPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                />
                <div className="signup-link-container">
                  <span>Already have an account?</span>{" "}
                  <Card.Link href="#" className="">
                    <Link to="/login">Login</Link>
                  </Card.Link>
                </div>
              </Form.Group>
              <Button variant="success" onClick={(e) => handleSubmit(e)}>
                Signup
              </Button>
              <Button
                variant="danger"
                style={{ marginLeft: "20px", padding: "10px" }}
                onClick={() => navigate("/")}
              >
                Cancel
              </Button>
              {message && (
                <Alert
                  variant={isError ? "danger" : "success"}
                  style={{ marginTop: "20px" }}
                  dismissible
                  onClose={handleClose}
                >
                  {message}
                </Alert>
              )}
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
