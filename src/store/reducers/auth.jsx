
const initialState = { 
  isAuth:false,
  users:[],
}


export default (state=initialState, action={})=>{
  switch (action.type) {
        case 'ISAUTH':{
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