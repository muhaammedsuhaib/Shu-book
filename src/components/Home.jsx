import React, { useContext } from 'react';
import './styles.css';
import backgroundVideo from './background.mp4';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { passing } from './Main';

const Home = () => {
  const { userData, setUserData } = useContext(passing);
  const nav = useNavigate();

  return (
    <div className="container-fluid w-100 p-0 position-relative" style={{ height: '100vh', overflow: 'hidden'}}>
      <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
    
      <img src="/Logo.png" alt="" className="bg-transparent zoom-image" width={"200px"} />
      <div className="container p-5" style={{ display: 'grid', placeItems: 'center' }}>
        <h1 className='text-center text-white display-2'>Organize your work<span style={{color: 'hsl(218, 81%, 75%)'}}> and life, finally.</span> </h1>
        <p className='text-center fs-3' style={{fontFamily: 'unset', color: 'hsl(218, 81%, 85%)' }}>
          Welcome to SHUBOOK, where productivity meets simplicity – your ultimate destination to organize tasks, streamline schedules, and conquer your day with ease.
        </p>
        <div className="container text-center">
          <MDBBtn
            variant="primary"
            rounded
            className="btn btn-lg btn-primary text-center"
            style={{
              background: 'radial-gradient(circle, #44006b, #ad1fff)'        
            }}
            onClick={() => nav(!userData ? '/login' : '/blog')}
          >
            <img src="/button-logo.png" alt="Logo" style={{ width: '34px', marginRight: '8px' }} className='zoom-btn' />
            <span className='zoom-btn'>Get Started</span>
          </MDBBtn>
        </div>
      </div>
    </div>
  );
};

export default Home;
