import React, { useContext, useState } from "react";
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
import { passing } from "./Main";

function Changep() {
  const { userData, setUserData } = useContext(passing);
  const [collect, setCollect] = useState({
    current: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState(null);
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.put(
        `https://shubook-backend-project.onrender.com/api/users/${userData.id}/change`,
        {
          currentPassword: collect.current,
          newPassword: collect.password,
          confirmPassword: collect.confirm,
        },
        config
      );

      toast.success(response.data.message);

      // Update user data if needed
      setUserData(response.data.user);

      setTimeout(() => {
        nav("/blog"); // Redirecting to home page after 1 second
      }, 1000);
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred"); // Handling error
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
            Boost Your Productivity <br />
            <span style={{ color: "hsl(218, 81%, 75%)" }}>with Shubook.</span>
          </h1>
          <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
            Hey {userData && userData.email.split("@")[0]}, if you need to
            change your password or forgot it, no problem!{" "}
            <a href="https://wa.me/7306890297">Help Me</a> Contact the Shubook
            community for assistance.
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
                  label="Current password"
                  type="password"
                  onChange={(e) =>
                    setCollect({ ...collect, current: e.target.value })
                  }
                />
                <MDBInput
                  required
                  wrapperClass="mb-4"
                  label="Password"
                  type="password"
                  onChange={(e) =>
                    setCollect({ ...collect, password: e.target.value })
                  }
                />
                <MDBInput
                  required
                  wrapperClass="mb-4"
                  label="Confirm password"
                  type="password"
                  onChange={(e) =>
                    setCollect({ ...collect, confirm: e.target.value })
                  }
                />
                <MDBBtn className="w-100 mb-2" size="md" type="submit">
                  Change Password
                </MDBBtn>
                {error && <div className="text-danger mb-4">{error}</div>}
              </form>
              <MDBBtn color="tertiary" onClick={() => nav("/blog")}>
                Cancel
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

export default Changep;
