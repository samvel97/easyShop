import { nanoid } from "nanoid"


const initialState = {
    titles:[
        {id:nanoid(), title:'Watches'},
        {id:nanoid(), title:'Bags'},
        {id:nanoid(), title:'Jewels'},
        {id:nanoid(), title:'Hats'},
        {id:nanoid(), title:'Perfume'},
    ]
}

export default (state=initialState, action={})=>{
    switch (action.type) {
        case 'AAA':{
          
    }
  default:return state;
}
}
