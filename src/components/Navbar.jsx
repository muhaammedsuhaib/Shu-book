import React, { useContext, useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
  MDBCol,
  MDBRow,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownMenu
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { passing } from './Main';

export default function Navbar() {
  const [openNavExternal, setOpenNavExternal] = useState(false);
  const {userData,setUserData}=useContext(passing)
  const nav =useNavigate()

  return (
    <>
      <MDBCollapse open={openNavExternal} className='text-white'>
        <div className='d-flex p-2 gap-4'>
        <MDBIcon fas icon="user-circle" size='2x' /> 
        <p className='text-white mt-1'>{userData&&userData}</p>
          <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link  p-0 hidden-arrow' role='button'  >
                <MDBIcon fas icon="cog" className='mt-2' size='1x' />
                </MDBDropdownToggle>
                <MDBDropdownMenu style={{backgroundColor:'white',color:'white'}}>
                  <MDBDropdownItem link ><MDBIcon fas icon="user-circle" /> Profile</MDBDropdownItem>
                  <MDBDropdownItem link ><MDBIcon fas icon="cogs" /> Settings</MDBDropdownItem>
                  <MDBDropdownItem link ><MDBIcon fas icon="user-plus" /> Add new account</MDBDropdownItem>
                  <MDBDropdownItem link href='/'  ><MDBIcon fas icon="sign-out-alt" /> Logout</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
        </div>
      </MDBCollapse>
      <MDBNavbar dark bgColor='hsl(218, 41%, 15%)'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavExternal(!openNavExternal)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBNavbarBrand className='p-0'>
          <img src="/Logo.png" alt="" className="bg-transparent zoom-image" width={"100px"} />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}