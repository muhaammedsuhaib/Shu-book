import React, {  useContext,useState } from 'react';
import { MDBBtn, MDBInput, MDBIcon,MDBTextArea } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { passing } from './Main';

const Blog = () => {
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
    <>
      <div className="container-fluid bg-black" style={{ width: "100%", height: "100vh", justifyContent: 'center', alignContent: "center", display: 'flex', padding: "50px" }}>
        <div className='bg-white' style={{ width: '1000px', height: 'auto', paddingTop: "50px", borderRadius: '20px' }}>
          {/* <h3 className='text-center text-primary' style={{ fontFamily: 'fantasy' }}>SHUBOOK</h3> */}
          <div className="container">
            <form onSubmit={clickHandle}>
              <MDBInput label="Enter Heading" className='mb-3' required value={todoheading} onChange={(e) => setTodoheading(e.target.value)} />
              <MDBTextArea label="Enter Task"  rows="{5}" required value={todotext} onChange={(e) => setTodotext(e.target.value)} className='mb-3 p-3'/>
              <MDBBtn type="submit" block>Add Task</MDBBtn>
              <MDBBtn onClick={() => nav('/show')} block>All tasks</MDBBtn>
            </form>
            <div className='container mt-4'>
              <a href="https://www.facebook.com/profile.php?id=100073352894286&mibextid=ZbWKwL"><MDBIcon fab icon="facebook-f" className='mx-2' size='lg' /></a>
              <a href="https://www.instagram.com/suhaii.bb"><MDBIcon fab icon="instagram" className='mx-2' size='lg' /></a>
              <a href="https://www.linkedin.com/in/muhammedsuhaib/"><MDBIcon fab icon="linkedin-in" className='mx-2' size='lg' /></a>
              <a href="https://github.com/muhaammedsuhaib"><MDBIcon fab icon="github-alt" className='mx-2' size='lg' /></a>
              <a href="https://muhaammedsuhaib.github.io/Portfolio/"><MDBIcon fas icon="blog" className='mx-2' size='lg' /></a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Blog;
