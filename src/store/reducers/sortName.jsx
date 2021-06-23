import { nanoid } from "nanoid"


const initialState = {
    titles:[
        {id:nanoid(), title:'Watches'},
        {id:nanoid(), title:'Bags'},
        {id:nanoid(), title:'Jewels'},
        {id:nanoid(), title:'Hats'},
        {id:nanoid(), title:'Perfume'},
    ],
    adminManagement:[{
        id:null,
        title:null,
    }]
}

export default (state=initialState, action={})=>{
    switch (action.type) {
        case 'ADMIN_MANAGEMENT':{
          const adminPanel = {
            id:action.id,
            title:action.title
          }
        return {...state, adminManagement:adminPanel}
    }
  default:return state;
}
}
