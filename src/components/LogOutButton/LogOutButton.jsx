import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    <> 
    
    <Button
    variant="contained"
    sx={{
      backgroundColor: '#E9967A',
      color: 'white',
      '&:hover': {
        backgroundColor: '#E8856A'
      }
    }}
    onClick={() => dispatch({ type: 'LOGOUT' })}>

      Log Out

    </Button>
    {/* <button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
      Log Out
    </button> */}
    </>
   
  );
}

export default LogOutButton;
