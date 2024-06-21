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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {

  const [collect,setCollect]=useState('');
     const [auth,setAuth]=useState(true);
     const [useData,setUserData]=useState(true);

     const nav =useNavigate();


  const handleSubmit = async (e)=>{
    e.preventDefault()
    const response = await axios.post('http://localhost:4000/api/users/register',{
       email:collect.email,
       password:collect.password,          
     });
    try {
      setAuth(!auth)
      setCollect('')
      alert(response.data.message)
      setTimeout(()=>{
                    nav('/login')
                },1000) 
    } catch (error) {
      toast.error(error.response.data.message);        
    }
  }
  
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
          Make your day productive<br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>with Shubook.</span>
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
              
              {/* <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/> */}


              <form onSubmit={handleSubmit} >
          {/* <h4>Create new account</h4> */}
         {/* <MDBFile wrapperClass="mb-4" label="Choose file" onChange={(e)=>setCollect({...collect,image:e.target.value})} /> */}
          {/* <MDBInput required wrapperClass='mb-4 mt-3' label='Name' id='form1' name="username" type='text'onChange={(e)=>setCollect({...collect,username:e.target.value})} /> */}
          <MDBInput required wrapperClass="mb-4" label='Email' id='form2' name="email" type='email' onChange={(e)=>setCollect({...collect,email:e.target.value})}/>
          <MDBInput required wrapperClass="mb-4"  label='Password' id='form3' name="password" type='password' onChange={(e)=>setCollect({...collect,password:e.target.value})} />
          {/* <MDBInput required wrapperClass="mb-4" label='Confirm Password' id='form4' name="cPassword" type='password' onChange={(e)=>setCollect({...collect,cpassword:e.target.value})}/>     */}
             
          <MDBBtn className='w-100 mb-2' size='md' type="submit" >sign up</MDBBtn>
             {/* <MDBBtn  className='mx-2' color='secondary'  type="submit"> Submit </MDBBtn>    */}
                     
          </form>
          <MDBBtn rounded color='tertiary' onClick={()=>{setUserData(null);nav('/login')}} > Login </MDBBtn>

              {/* <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div> */}

              {/* <MDBBtn className='w-100 mb-4' size='md' href='/collect'>sign up</MDBBtn> */}

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

export default Signup;