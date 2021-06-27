import { useDispatch } from "react-redux";

const Checkboxes = ({id, title,checked})=>{
  const dispatch = useDispatch()
  const handleClick = ()=>{
    dispatch({type:'IS_CHAKED', id})
  }
  return(
    <>
    <input type='checkbox' id={id} checked={checked} onClick={()=>handleClick(id)}/>
    <label for="scales">{title}</label>
    </>
  )
}

export default Checkboxes;