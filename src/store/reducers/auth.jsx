import firebase from "firebase";

const initialState = { 
  isAuth:false,
}


export default (state=initialState, action={})=>{
  switch (action.type) {
    case 'ISAUTH':{
      firebase.auth().createUserWithEmailAndPassword(action.val.email,action.val.password)
      .then(res=>console.log(res))
      .catch(error=>console.log(error))
      return {...state,isAuth:true}  
    }
  default:return state;
}
}