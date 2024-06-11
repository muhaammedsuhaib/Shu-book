import React from 'react';
// import './styles.css';
import backgroundVideo from './background.mp4';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const nav=useNavigate();
  return (
    <div className="container-fluid w-100 p-0" style={{ height: '100vh', overflow: 'hidden' }}>
      {/* <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="overlay">        
        <h1 className='text-start text-primary p-3' style={{ fontFamily: 'fantasy' }}>SHUBOOK</h1>
        <div className="container" style={{display:'grid',placeItems:'center',height:'100%'}}>
        <h1 className='text-center text-white display-1' style={{ fontFamily: 'inherit' }}>Organize your work and life, finally.</h1>
        <p  className='text-center text-white fs-3'  style={{ fontFamily: 'unset' }}>Welcome to SHUBOOK, where productivity meets simplicity – your ultimate destination to organize tasks, streamline schedules, and conquer your day with ease.</p>
        <div className="container text-center">
        <MDBBtn variant="primary" className="btn btn-lg btn-primary text-center" onClick={()=>nav('/login')}>Get Started </MDBBtn>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
