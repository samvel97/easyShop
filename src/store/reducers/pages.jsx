import { nanoid } from "nanoid"
import img  from '../../assets/images/watch.jpg'


const initialState = { 
  titles:[
    {id:nanoid(), title:'Watches',card:[],},
    {id:nanoid(), title:'Bags', card:[],},
    {id:nanoid(), title:'Jewels', card:[],},
    {id:nanoid(), title:'Hats', card:[],},
    {id:nanoid(), title:'Perfume', card:[]},
    ],
  sorting:[
    {id:nanoid(), title:'Woman', checked:false, card:[],},
    {id:nanoid(), title:'Man', checked:false, card:[],},
    {id:nanoid(), title:'Kids', checked:false, card:[],},
    {id:nanoid(), title:'New', checked:false, card:[],},
  ],
}
let id = 1
export default (state=initialState, action={})=>{
  switch (action.type) {
    case 'IS_CHAKED':{
      const checked = state.sorting.map((elem)=>({
        ...elem,
        checked:elem.id === action.id?!elem.checked:elem.checked
      }))
      return {...state, sorting:checked}
    }
    case 'ADD_CARD':{
       const addCard = {
          id:id,
          title:action.val.title,
          price:action.val.price,
          count:action.val.count,
          img:img,
          favorite:false,
         }
       const getWay = state.titles.map((elem)=>({
          ...elem,
          card:elem.id === action.id?[...elem.card, addCard]:[...elem.card]
        }))
        id++
       return {...state, titles:getWay}
     }
  default:return state;
}
}