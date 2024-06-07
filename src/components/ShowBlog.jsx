import React, { useContext, useEffect, useState } from 'react'
import { passing } from './Main'
import { MDBBtn, MDBInput,MDBIcon,MDBDropdown,MDBDropdownToggle,MDBDropdownMenu,MDBDropdownItem } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBTextArea
} from 'mdb-react-ui-kit';
import './stayl.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const ShowBlog = () => {
  
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
        // alert("Task edited successfully");
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
        const response = await axios.get("http://localhost:4000/api/all");
        setTask(response.data.tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
};

useEffect(() => {
  fetchTasks();
}, [ ]);
  return (    
<>
<div className="container-fluid bg-black" style={{width:"100%",height:"100vh",justifyContent:'center',alignContent:"center", display:'flex',padding:"50px",overflow:'auto'}}>
        <div className='bg-white' style={{width:'700px',height:'auto',paddingTop:"50px" ,borderRadius:'20px',overflow:'auto'}}>
        <h3 className='text-center text-primary' style={{fontFamily:'fantasy'}} >SHUBOOK</h3> 
        <MDBBtn color='link' onClick={()=>nav('/')}> <MDBIcon fas icon="long-arrow-alt-left" /> Go back</MDBBtn>
       <div className="container text-end"><MDBIcon fas icon="sync-alt"  onClick={handleSyncClick}  className={isRotating ? 'rotate' : ''}  /></div> 
        <hr />
      <table class="table">


    {task.map((it,index)=>(
  <tbody>
    <tr>
      <th scope="row">{index +1}</th>
      <td className='text-start text-break' onClick={()=>shows(it)}><strong>{it.Todoheading.toUpperCase()}</strong></td>
      <td className='text-end'>
      <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link text-white' role='button'  >
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
      </div>
      </div>

 

 {/* show Modal  */}
<MDBModal open={showModal} onClose={() => setShowModal(false)} tabIndex='-1' >
  <MDBModalDialog scrollable size='lg'>
    <MDBModalContent  >
      <MDBModalHeader>
        <MDBModalTitle >  <h3 className='text-primary' style={{fontFamily:'fantasy'}} >SHUBOOK</h3></MDBModalTitle>
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
        <MDBModalTitle >  <h3 className='text-primary' style={{fontFamily:'fantasy'}} >SHUBOOK</h3></MDBModalTitle>
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
        <MDBInput label="Enter Heading" className='mt-2 mb-4' value={editHeading} onChange={(e)=>setEditHeading(e.target.value)} required/>
        <MDBTextArea label="Enter Task"  rows="{5}" required value={editText}  onChange={(e)=>setEditText(e.target.value)} className='mb-3 p-3'/>
        
        <MDBBtn   block onClick={()=>editTask()} ><MDBIcon fas icon="save" /> CHAnge and Save</MDBBtn>        
          </form> 
          </div>  
          </div>
      </MDBModalBody>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>
<ToastContainer/>
</>
  )
}

export default ShowBlog