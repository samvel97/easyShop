const initialState = {
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
