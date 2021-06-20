import {Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase";
import { useEffect,useState } from "react";
import './style.main.scss'
// import { useSelector } from 'react-redux';
// import { isTrue } from '../store/selectors';

function SignIn() {
  const [val, setVal] = useState({email:'', password:''})
  // const isAuth = useSelector(isTrue)
    
  useEffect(()=>{
    const db = firebase.database()
  })

  const handleChange = (e)=>{ 
    setVal({...val,[e.target.type]:e.target.value})
  }

  const createAccaunt = ()=>{
    const {email, password} = val
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(p=>p.additionalUserInfo.isNewUser)
    .catch(error=>console.log(error))
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
  <Button variant="primary"  onClick={createAccaunt}>
    Submit
  </Button>
</Form>
    </>
  );
}

export default SignIn;