import React, { useContext, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
  MDBTextArea
}
from 'mdb-react-ui-kit';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { passing } from './Main';

function Collect() {

  const [todoheading, setTodoheading] = useState('');
  const [todotext, setTodotext] = useState('');
  const [auth,setAuth]=useState(false);

  const {Task,setTask}=useContext(passing)
  
  const nav = useNavigate();

  const clickHandle = async (e) => {
    e.preventDefault();

    try {
       await axios.post("http://localhost:4000/api/add", {
        Todoheading: todoheading,
        Todotext: todotext,
      });
      toast.info('Task added successfully');
      setAuth(!auth);
      setTodoheading('');
      setTodotext('');
    } catch (error) {
      if (error.response) {
        toast.error(`Error: ${error.response.data.message}`);
      } else {
        toast.error('Error adding Data');
      }
      console.log("Error adding Data", error);
    }
  };

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='4' className='text-center text-md-start d-flex flex-column justify-content-center'>

        <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
            <span style={{color: 'hsl(218, 81%, 75%)'}}>SHUBOOK</span>
          </h1>

          <p className='fs-5 text' style={{color: 'hsl(218, 81%, 85%)'}}>
          Welcome back, [UserName]! Stay organized and boost your productivity with SHUBOOK's intuitive to-do list features
          </p>

        </MDBCol>

        <MDBCol md='8' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>



          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>


            {/* <MDBRow>
                <MDBCol col='7'>
                <MDBInput wrapperClass='mb-4' label='First name'  type='text'/>
                </MDBCol>
                
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
                  </MDBCol>
              </MDBRow> */}



            <form onSubmit={clickHandle}>
            <MDBInput wrapperClass='mb-4' type='text' label='Task name' required value={todoheading} onChange={(e) => setTodoheading(e.target.value)} />
            <MDBTextArea label="Description" id="textAreaExample" rows={10} required value={todotext} onChange={(e) => setTodotext(e.target.value)} className='mb-3 p-3'/>
              <MDBBtn type="submit" block  style={{background: 'hsl(218, 81%, 70%)',color:'black'}}>Add Task</MDBBtn>
              <div className='container text-center'>
              <MDBBtn   color='tertiary' onClick={() => nav('/blog')} >Cancel</MDBBtn>

              </div>
            </form>
              
                  {/* <MDBBtn >All tasks</MDBBtn> */}
                 </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>
     <ToastContainer/>
    </MDBContainer>
  );
}

export default Collect;