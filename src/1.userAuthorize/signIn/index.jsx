import firebase from "firebase";
import {Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import './style.main.scss'
import { useDispatch } from 'react-redux';

function SignIn() {
  const [val, setVal] = useState({email:'', password:''})
  const dispatch = useDispatch()


  const handleChange = (e)=>{ 
    setVal({...val,[e.target.type]:e.target.value})
  }
  const createAccaunt = (e)=>{
    firebase.auth().createUserWithEmailAndPassword(val.email,val.password)
            .then(res=>(dispatch({type:'ISAUTH'})))
            .catch(res=>(val.email.length === 0 && val.password.length === 0?alert('Need to fill in the line!!!'):alert('Something gone wrong')))
  }
   
  
  return (
    <>
      <Form className='auth'>
          <h1>Sign in for shopping</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={val.email} onChange={handleChange}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={val.password} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="outline-warning"  onClick={createAccaunt}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default SignIn;