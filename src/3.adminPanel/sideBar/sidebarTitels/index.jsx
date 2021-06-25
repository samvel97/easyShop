import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

const SideBarLists = ({title,id})=>{
    const history = useHistory()
    const dispatch = useDispatch()

    const handleClick = ()=>{
        dispatch({type:'ADMIN_MANAGEMENT', title, id})
        history.push({pathname:`/Admin/${title}`})
    }
    return(
        <>
           <li id={id} onClick={()=>handleClick(title, id)}>{title}</li>
        </>
    )
}

export default SideBarLists;