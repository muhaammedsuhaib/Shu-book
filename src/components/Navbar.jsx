import React, { useContext, useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { passing } from "./Main";

export default function Navbar() {
  const [openNavExternal, setOpenNavExternal] = useState(false);
  const { userData, setUserData, task } = useContext(passing);
  const nav = useNavigate();

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem("user");
    nav("/");
  };

  const [topRightModal, setTopRightModal] = useState(false);

  const toggleOpen = () => setTopRightModal(!topRightModal);

  return (
    <>
      <MDBCollapse open={openNavExternal} className="text-white">
        <div className="d-flex p-2 gap-4">
          <MDBIcon fas icon="user-circle" size="2x" />
          <p className="text-white mt-1">{userData && userData.email}</p>
          <MDBDropdown>
            <MDBDropdownToggle
              tag="a"
              className="nav-link  p-0 hidden-arrow"
              role="button"
            >
              <MDBIcon fas icon="cog" className="mt-2" size="1x" />
            </MDBDropdownToggle>
            <MDBDropdownMenu
              style={{ backgroundColor: "white", color: "white" }}
            >
              <MDBDropdownItem
                link
                onClick={() => {
                  toggleOpen();
                  setOpenNavExternal(!openNavExternal);
                }}
              >
                <MDBIcon fas icon="user-circle" /> Profile
              </MDBDropdownItem>
              {/* <MDBDropdownItem link ><MDBIcon fas icon="cogs" /> Settings</MDBDropdownItem> */}
              <MDBDropdownItem link onClick={() => nav("/signup")}>
                <MDBIcon fas icon="user-plus" /> Add new account
              </MDBDropdownItem>
              <MDBDropdownItem link onClick={handleLogout}>
                <MDBIcon fas icon="sign-out-alt" /> Logout
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </div>
      </MDBCollapse>
      <MDBNavbar dark bgColor="hsl(218, 41%, 15%)">
        <MDBContainer fluid>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNavExternal(!openNavExternal)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBNavbarBrand className="p-0">
            <img
              src="/Logo.png"
              alt=""
              className="bg-transparent zoom-image"
              width={"100px"}
            />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

      {/* profile */}

      <MDBModal
        animationDirection="right"
        open={topRightModal}
        tabIndex="-1"
        onClose={() => setTopRightModal(false)}
      >
        <MDBModalDialog position="top-right" side>
          <MDBModalContent>
            <MDBModalHeader
              className="text-white"
              style={{ background: "#44006b" }}
            >
              <MDBModalTitle>Profile</MDBModalTitle>
              <MDBBtn
                color="none"
                className="btn-close btn-close-white"
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="row">
                <div className="col-3 text-center">
                  <i
                    className="fas fa-user fa-4x "
                    style={{ color: "#44006b" }}
                  ></i>
                </div>

                <div className="col-9">
                  <p>{userData && userData.email}</p>
                  <p>
                    Welcome, {userData && userData.email.split("@")[0]}! You've
                    almost reached {task.length} tasks added
                  </p>
                </div>
                <div className="container text-end">
                  {" "}
                  <MDBBtn color="tertiary" onClick={() => nav("/change")}>
                    change pssword
                  </MDBBtn>
                </div>
                <div className="container text-end">
                  <img
                    src="/Logo.png"
                    alt="Your Brand Logo"
                    width={"100px"}
                    style={{ filter: "brightness(0%)" }}
                  />
                </div>
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
