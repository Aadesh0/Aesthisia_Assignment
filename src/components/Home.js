import React from 'react'
import { Button } from "react-bootstrap";
import { useUserAuth } from '../context/UserAuthContext';
import { useNavigate } from "react-router";


const Home = () => {
  const {user , logOut} = useUserAuth();
  const navigate = useNavigate();
  const handleLogOut = async() =>{
    try{
      await logOut(); 
      navigate("/"); 
    }catch(error){
      console.log(error.message);
    }
  } 
  return (
    <>
        <div className='p-4 box mt-3 text-center'>Hello Welcome <br/>{user && user.email}</div>
        <div className='d-grid gap-2'>
            <Button variant='primary' onClick={handleLogOut}>Log Out</Button>
        </div>
    </>
  );
};

export default Home