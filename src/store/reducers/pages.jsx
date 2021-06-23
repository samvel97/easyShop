const initialState = { 
  card:[],
}

export default (state=initialState, action={})=>{
  switch (action.type) {
     case 'ADD_CARD':{
         const addCard = {
            title:action.val.title,
            price:action.val.price,
            count:action.val.count,
        }
       
       return {...state, card:[...state.card, addCard] }
     }
  default:return state;
}
}