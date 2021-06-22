import SignIn from './signIn'
import LognIn from './logIn';
import './style.main.scss'
const UserAuth = ()=>{
  return (
    <>
    <div className='login'>
      <SignIn/>
      <LognIn/>
    </div>
    </>
  );
  }

export default UserAuth;