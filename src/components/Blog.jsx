import React, {  useContext,useEffect,useState } from 'react';
import { MDBBtn, MDBInput, MDBIcon,MDBTextArea } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { passing } from './Main';
import  './styles.css';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,MDBCardImage
}
from 'mdb-react-ui-kit';
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from 'mdb-react-ui-kit';
import Navbar from './Navbar';

const Blog = () => {


  const {userData,setUserData}=useContext(passing);
  const [todoheading, setTodoheading] = useState('');
  const [todotext, setTodotext] = useState('');
  const [auth,setAuth]=useState(false);
    
  const [isRotating, setIsRotating] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [editModal,setEditModal] = useState(false);
    const {task,setTask}=useContext(passing)
    const [sh,setSh]=useState(null)

    const [editHeading, setEditHeading] = useState('');
    const [editText, setEditText] = useState('');
    const [editId, setEditId] = useState(null);

    const nav=useNavigate();
   
   const shows=(dta)=>{
    setSh(dta)
    setShowModal(!showModal)
   }
  
   const handleSyncClick = () => {
   fetchTasks();
    setIsRotating(true);
   
    // Perform your sync logic here
    setTimeout(() => {
      setIsRotating(false);
    }, 1000);
  };

  const startEditing = (task) => {
    setEditId(task._id);
    setEditHeading(task.Todoheading);
    setEditText(task.Todotext);
    setEditModal(!editModal)
};

  const editTask = async (e) => {
    try {
        await axios.put(`http://localhost:4000/api/edit/${editId}`, {
            Todoheading: editHeading,
            Todotext: editText
        });
        setEditId(null);
        setEditHeading('');
        setEditText('');
        toast.info("Task edited successfully");
        setTimeout(()=>{
          setEditModal(!editModal);
        },500)
        fetchTasks();
    } catch (error) {
        console.error('Error editing task:', error);
    }
};
  const remove= async (id)=>{
    try {
       await axios.delete(`http://localhost:4000/api/remove/${id}`)
       toast.info("Remove successfully");
       fetchTasks()
    } catch (error) {
       console.error('Error fetching tasks:', error);
    }
   }

   const fetchTasks = async () => {
    try {
      console.log(userData.id);
        const response = await axios.get(`http://localhost:4000/api/${userData.id}/userData`);
        setTask(response.data.tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
};

useEffect(()=>{

  fetchTasks();
},[])


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
  
  
  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
        const parsedUserData = JSON.parse(storedUserData);
        setUserData(parsedUserData);
    }
}, []);
  return (
    <>
    <Navbar/>
 <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

          <MDBRow className='sm'>
            <MDBCol md={'12'}>
              <div className="container text-center text-white" > <span color='tertiary' size='lg' className='bg-transparent' onClick={()=>nav('/collect')}><MDBIcon fas icon="plus-circle" />  Add task</span></div>
            </MDBCol>

<MDBCol md='9' className='text-center text-md-start d-flex flex-column'>

        <MDBCard className='my-3 bg-glass'>
        <MDBCardBody className='p-1'>
       <div className="container text-end"><MDBIcon fas icon="sync-alt"  onClick={handleSyncClick}  className={isRotating ? 'rotate' : ''}  /></div> 
        <table class="table">
    {task.map((it,index)=>(
  <tbody>
    <tr>
      <th scope="row">{index +1}</th>
      <td className='text-start text-break' onClick={()=>shows(it)}><strong>{it.Todoheading.toUpperCase()}</strong></td>
      <td className='text-end'>
      <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link p-0 hidden-arrow' role='button' >
                <MDBIcon fas icon="ellipsis-v" className='text-black'/>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link onClick={()=>remove(it._id)} ><MDBIcon fas icon="trash-alt" color='danger' /></MDBDropdownItem>
                  <MDBDropdownItem link onClick={() => startEditing(it)} ><MDBIcon far icon="edit" /></MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
      </td>
    </tr>
  </tbody>
     ))}
</table>
        </MDBCardBody>
          </MDBCard>      
</MDBCol>

<MDBCol md='3'>
  <div className='my-3 text-white'>
    <div className='p-1'>
      Hey, {userData && userData.email.split('@')[0]}! Welcome to ShuBook, the ultimate task management solution meticulously developed by Suhaib, a seasoned software architect. Dive into our platform tailored to supercharge productivity and streamline your daily operations effortlessly. Stay connected with Suhaib on LinkedIn for further insights and updates:<a target='_blank' href='https://www.linkedin.com/in/muhammedsuhaib/' >Connect on LinkedIn.</a> 
      
      <div className="container fs-5 text text-white">
        <img src="/Logo.png" alt="Your Brand Logo" width={'150px'}  />
        {/* <MDBIcon fas icon="plus-circle" /> Add task */}
      </div>
    </div>
  </div>
</MDBCol>



</MDBRow>


</MDBContainer>

 {/* show Modal  */}
 <MDBModal open={showModal} onClose={() => setShowModal(false)} tabIndex='-1' >
  <MDBModalDialog scrollable size='lg'>
    <MDBModalContent  >
      <MDBModalHeader>
        <MDBModalTitle >       <img src="/Logo.png" alt="Your Brand Logo" width={'150px'}    style={{ filter: 'brightness(0%)'}} /></MDBModalTitle>
        <MDBBtn
          className='btn-close'
          color='none'
          onClick={() => setShowModal(false)}
        ></MDBBtn>
      </MDBModalHeader>
      <MDBModalBody>      
        <div className='bg-white' style={{width:'100%',height:'70vh',overflow:'auto'}}>
      <h3 className='text-center text-break' style={{fontFamily:'Verdana, Arial, Helvetica, sans-serif'}}>{sh?.Todoheading}</h3> <hr />
      <p className='text-break'><b>{sh?.Todotext}</b></p>
          </div>
      </MDBModalBody>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>

 {/* edit modal */}
 <MDBModal open={editModal} onClose={() => setEditModal(false)} tabIndex='-1' >
  <MDBModalDialog scrollable size='lg'>
    <MDBModalContent  >
      <MDBModalHeader>
        <MDBModalTitle >        <img src="/Logo.png" alt="Your Brand Logo" width={'150px'}    style={{ filter: 'brightness(0%)'}} /></MDBModalTitle>
        <MDBBtn
          className='btn-close'
          color='none'
          onClick={() => setEditModal(false)}
        ></MDBBtn>
      </MDBModalHeader>
      <MDBModalBody>      
        <div className='bg-white' style={{width:'100%',height:'70vh',overflow:'auto'}}>
        <div className="container">
        <form className='container'>
        <MDBInput label="Task name" className='mt-2 mb-4' value={editHeading} onChange={(e)=>setEditHeading(e.target.value)} required/>
        <MDBTextArea label="Description" id="textAreaExample" rows={8} required value={editText} onChange={(e)=>setEditText(e.target.value)} className='mb-3 p-3'/>
        <MDBBtn   block onClick={()=>editTask()} ><MDBIcon fas icon="save" /> Save</MDBBtn>        
          </form> 
          </div>  
          </div>
      </MDBModalBody>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>
      <ToastContainer />
    </>
  );
};

export default Blog;





      {/* <MDBRow>
        <MDBCol col='6'>
          <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
        </MDBCol>

        <MDBCol col='6'>
          <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
        </MDBCol>
      </MDBRow>

      <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/> */}

      {/* <div className='d-flex justify-content-center mb-4'>
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
      </div> */}

      {/* <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn> */}

      {/* <div className="text-center">

        <p>or sign up with:</p>

        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='facebook-f' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='twitter' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='google' size="sm"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
          <MDBIcon fab icon='github' size="sm"/>
        </MDBBtn>

      </div> */}

    