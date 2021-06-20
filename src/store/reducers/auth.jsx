const initialState = { 
  isAuth:false,
}


export default (state=initialState, action={})=>{
  switch (action.type) {
    case 'ISAUTH':{
      return {...state,isAuth:true}  
    }
  default:return state;
}
}