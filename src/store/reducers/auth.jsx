import firebase from "firebase";

const initialState = { 
  isAuth:false,
}


export default (state=initialState, action={})=>{
  switch (action.type) {
        case 'ISAUTH':{
          firebase.auth().createUserWithEmailAndPassword(action.val.email,action.val.password)
          .then(res=>({...state, isAuth:res.additionalUserInfo.isNewUser}))
          .catch(error=>console.log(error))
          return {isAuth:true}
    }
    case 'LOGIN':{
      firebase.auth().signInWithEmailAndPassword(action.val.email,action.val.password)
      .then(res=>({...state, isAuth:res.additionalUserInfo.isNewUser}))
      .catch(err=>console.log('err'))
      return {isAuth:true}  
    }
  default:return state;
}
}