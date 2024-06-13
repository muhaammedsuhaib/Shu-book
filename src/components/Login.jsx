import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

  const [collect,setcollect]=useState([]);
 const [userdata,setUserData]=useState([]);
  const nav=useNavigate();
  const handleSubmit= async(e)=>{

    const consfig = {
      headers : {
        "content-type":"application/json",
      }
  }
   try {
    e.preventDefault()
    const response= await axios.post("http://localhost:4000/api/users/login",{
  email:collect.email,
  password:collect.password
    },consfig)
    setTimeout(()=>{        
      setUserData(response.data.user);
      nav('/')
    },1000)
    alert(response.data.message)
   } catch (error) {
    // alert.error(error.response.data.message)
    alert('error')
   }
  }
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
          Get more done <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>using Shubook.</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
            Empower every facet of your routine with Shubook's groundbreaking task management system. Seamlessly organize tasks, optimize efficiency, and take command of your daily productivity journey with unparalleled ease and precision.
         </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

            <form onSubmit={handleSubmit}>
                 <MDBInput required wrapperClass="mb-4" defaultValue={'ronaldo@gmail.com'} label='Email'  type='email' onChange={(e)=>setcollect({...collect,email:e.target.value})}/>
                 <MDBInput required wrapperClass="mb-4" defaultValue={12345678} label='Password' type='password'  onChange={(e)=>setcollect({...collect,password:e.target.value})} />                     
                 <div className="d-grid gap-2"> 
                      <MDBBtn className='w-100 mb-2' size='md' type="submit">Login</MDBBtn>
                       </div>                                                    
                 </form>
                      <MDBBtn  color='tertiary' onClick={()=>nav('/signup')} >     Create new account    </MDBBtn>
{/* 
              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>           

              <MDBBtn className='w-100 mb-2' size='md'>Login</MDBBtn>
              <MDBBtn className='w-100 mb-4' color='tertiary' size='sm' onClick={()=>nav('/signup')}>Create new account</MDBBtn> */}

              <div className="text-center">

                <p>www.shubook.com</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }} href='https://www.facebook.com/profile.php?id=100073352894286&mibextid=ZbWKwL'>
                  <MDBIcon fab icon='facebook-f' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }} href='https://x.com/MuhaammedSuhaib'>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }} href='https://github.com/muhaammedsuhaib'>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;