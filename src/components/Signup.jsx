import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [collect, setCollect] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://shubook-backend-project.onrender.com/api/users/register",
        {
          email: collect.email,
          password: collect.password,
        }
      );

      toast.info(response.data.message);
      setCollect({ email: "", password: "" });

      setTimeout(() => {
        nav("/login"); // Redirect to login page after successful signup
      }, 1000);
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred"); // Handle error
    }
  };

  return (
    <MDBContainer
      fluid
      className="p-4 background-radial-gradient overflow-hidden"
    >
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1
            className="my-5 display-3 fw-bold ls-tight px-3"
            style={{ color: "hsl(218, 81%, 95%)" }}
          >
            Make your day productive <br />
            <span style={{ color: "hsl(218, 81%, 75%)" }}>with Shubook.</span>
          </h1>
          <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
            Empower every facet of your routine with Shubook's groundbreaking
            task management system. Seamlessly organize tasks, optimize
            efficiency, and take command of your daily productivity journey with
            unparalleled ease and precision.
          </p>
        </MDBCol>
        <MDBCol md="6" className="position-relative">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          ></div>
          <MDBCard className="my-5 bg-glass">
            <MDBCardBody className="p-5">
              <form onSubmit={handleSubmit}>
                <MDBInput
                  required
                  wrapperClass="mb-4"
                  label="Email"
                  type="email"
                  value={collect.email}
                  onChange={(e) =>
                    setCollect({ ...collect, email: e.target.value })
                  }
                />
                <MDBInput
                  required
                  wrapperClass="mb-4"
                  label="Password"
                  type="password"
                  value={collect.password}
                  onChange={(e) =>
                    setCollect({ ...collect, password: e.target.value })
                  }
                />
                <MDBBtn className="w-100 mb-2" size="md" type="submit">
                  Sign up
                </MDBBtn>
                {error && <div className="text-danger mb-4">{error}</div>}
              </form>
              <MDBBtn color="tertiary" onClick={() => nav("/login")}>
                Login
              </MDBBtn>
              <div className="text-center">
                <p>www.shubook.com</p>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                  href="https://www.facebook.com/profile.php?id=100073352894286&mibextid=ZbWKwL"
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                  href="https://x.com/MuhaammedSuhaib"
                >
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                  href="mailto:devhubb0@gmail.com"
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                  href="https://github.com/muhaammedsuhaib"
                >
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <ToastContainer />
    </MDBContainer>
  );
}

export default Signup;
