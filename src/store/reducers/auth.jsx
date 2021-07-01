import firebase from "firebase";

const initialState = { 
  isAuth:false,
}


export default (state=initialState, action={})=>{
  switch (action.type) {
        case 'ISAUTH':{
            firebase.auth().createUserWithEmailAndPassword(action.val.email,action.val.password)
            .then(res=>({...state, isAuth:!state.isAuth}))
          return {...state, isAuth:state.isAuth}
        }
        case 'LOGIN':{
          firebase.auth().signInWithEmailAndPassword(action.val.email,action.val.password)
          .then(res=>(console.log(state.isAuth)))
          .catch(res=>(action.val.email.length === 0 && action.val.password.length === 0?alert('Need to fill in the line!!!'):alert('Something gone wrong')))
          console.log(1);
          return {...state, isAuth:state.isAuth}  
        }
        case 'GGL_AUTH':{
          if(action.response.error){
            console.log(action.response);
          return {...state, isAuth:false}
          }
          else{
            return {...state, isAuth:true}
          }
        }
  default:return state;
}
}