import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import {Button} from '@mui/material';
import Logo from '../../Logo/Logo';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
          <Logo/>
     
     <br/>
    
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
          
          <Button 
            onClick={onLogin}
            variant="contained"
            sx={{
            backgroundColor: '#E9967A',
            color: 'white',
            '&:hover': {
              backgroundColor: '#E8856A'
            }
          }}>
              
              Login

            </Button>

           
          </center>
       
    </div>
  );
}

export default LandingPage;
