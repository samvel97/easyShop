import firebase from "firebase";

const initialState = { 
  isAuth:false,
}


export default (state=initialState, action={})=>{
  switch (action.type) {
        case 'ISAUTH':{
          return {...state, isAuth:true}
        }
        case 'LOGIN':{
          return {...state, isAuth:true}  
        }
        case 'GGL_AUTH':{
          if(action.response.error){
          return {...state, isAuth:false}
          }
          else{
            return {...state, isAuth:true}
          }
        }
  default:return state;
}
}