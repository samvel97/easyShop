import {Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useDispatch } from 'react-redux';

function LognIn() {
  const [val, setVal] = useState({email:'', password:''})

  const dispatch = useDispatch()

  const handleChange = (e)=>{ 
    setVal({...val,[e.target.type]:e.target.value})
  }

  const logIn = ()=>{
    dispatch({type:'ISAUTH', val})
  }
 

  return (
    <>
    <Form className='auth'>
    <h1>Log in if You have accaunt</h1>
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
  <Button variant="primary"  onClick={logIn}>
    Submit
  </Button>
</Form>
    </>
  );
}

export default LognIn;