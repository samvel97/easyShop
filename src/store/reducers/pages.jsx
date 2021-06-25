import { nanoid } from "nanoid"

const initialState = { 
  titles:[
    {id:nanoid(), title:'Watches',card:[]},
    {id:nanoid(), title:'Bags', card:[] },
    {id:nanoid(), title:'Jewels', card:[]},
    {id:nanoid(), title:'Hats', card:[]},
    {id:nanoid(), title:'Perfume', card:[]},
],
}

export default (state=initialState, action={})=>{
  switch (action.type) {
     case 'ADD_CARD':{
       const addCard = {
           title:action.val.title,
           price:action.val.price,
           count:action.val.count,
         }
       const getWay = state.titles.map((elem)=>({
          ...elem,
          card:elem.id === action.id?[...elem.card, addCard]:[...elem.card]
        }))
       return {...state, titles:getWay}
     }
  default:return state;
}
}