import React, { useState } from 'react';
import petal from '../resources/petals 1.png'
import {Link, useNavigate} from 'react-router-dom'
import { Alert, Form} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import {useUserAuth}  from '../context/UserAuthContext'
import Left from './leftside';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setError("");
        try{
            await logIn(email, password);
            navigate('/home');
            }catch(err){
                setError(err.message);
        }
    };
 
    const handleGoogleSignIn = async(e)=>{
        e.preventDefault();
        try{
            await googleSignIn();
            navigate('/home');
            }catch(error){
                console.log(error.message)
        }
    };


  return (
    <>
    <div className='p-4 box' >
    <Left/>
        <img src ={petal} alt='petal' style={{position: 'absolute' ,width: 61,height: 49, left: 930,top: 78}}/>

        <h2 className='mb-3' style={{position: 'absolute',width: 266,height: 44,left: 827,top: 127,
        fontFamily:'Poppins',fontStyle:'normal',fontWeight:'500',fontSize:'34',lineHeight:'130%',textAlign:'center',textTransform:'capitalize'
        ,color: '#020100'}}>Welcome Back!</h2>

        <p style={{position: 'absolute',width: 153,
            height: 22,
            left: 884,
            top: 171,
            
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 14,
            lineHeight: '160%',
           
            
            textAlign: 'center',
            
            color: '#667085'}}>Glad to see You, Again</p>

        {error && <Alert variant='danger'>{error}</Alert>}

        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicEmail' style={{boxSizing: 'border-box',

                position: 'absolute',
                width: 360,
                height: 49,
                left: 780,
                top: 219,
                opacity: 0.5,
                border: '#464660',
                borderRadius: 10}}>
                <Form.Control type='email' placeholder='Email address' onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword' style={{boxSizing: 'border-box',

                position: 'absolute',
                width: 360,
                height: 49,
                left: 780,
                top: 290,
                opacity: 0.5,
                border: '#464660',
                borderRadius: 10}}>
                <Form.Control type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>

            <Link style={{position: 'absolute',
                width: 102,
                height: 15,
                left: 1038,
                top: 250,
                
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: 12,
                lineHeight: 15,
                /* identical to box height */
                
                textAlign: 'center',
                
                color: '#667085',
                
                opacity: 0.5}}>Forgot Password</Link>

            <div className='d-grid gap-2'>
                <Button variant='primary' type='Submit' style={{display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20,
                    gap: 10,
                    
                    position: 'absolute',
                    width: 360,
                    height: 53,
                    left: 780,
                    top: 370,
                    
                    background: '#020100',
                    boxShadow: '0px 20px 32px rgba(2, 1, 0, 0.42)',
                    borderRadius: 10}}> 
                    Log In
                </Button>
            </div>
        </Form>
        
        <div>
            <GoogleButton className='g-btn' type='dark' onClick={handleGoogleSignIn} style={{display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            gap: 10,
            
            position: 'absolute',
            width: 360,
            height: 53,
            left: 780,
            top: 450,
            
            background: '#020100',
            boxShadow: '0px 20px 32px rgba(2, 1, 0, 0.42)',
            borderRadius: 10}}/>
        </div>
    </div>
    <div className='p-4' style={{position: 'absolute',
        width: 236,
        height: 19,
        left: 'calc(50% - 460px/2 + 320px)',
        top: 500,
        
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 14,
        lineHeight:3,
        textAlign: 'center',
        color: '#667085'}} >
        Don't have an account? <Link to='/signup'>Sign Up</Link>
    </div>
    </>
  )
}

export default Login