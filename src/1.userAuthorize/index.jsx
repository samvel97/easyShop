import SignIn from './signIn'
import LognIn from './logIn';
import './style.main.scss'
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';

const UserAuth = ()=>{
  const dispatch = useDispatch()

  const responseGoogle = (response) => {
    dispatch({type:'GGL_AUTH', response})
  }

  return (
    <>
    <div className='login'>
      <SignIn/>
      <LognIn/>
    </div>
    <div style={{width:'70%', margin:"0 auto", borderTop:'1px dashed', display:'flex', padding:'50px 0 0 400px'}}>
      <h3 style={{marginRight:'20px'}}>Sign in with google</h3>
      <GoogleLogin
        clientId="651412345797-e6d4t4108ns2mdn70evs82gaiuqkl276.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />,
  </div>
    </>
  );
  }

export default UserAuth;