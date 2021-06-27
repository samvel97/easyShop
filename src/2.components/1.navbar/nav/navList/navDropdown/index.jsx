import {NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { sorting } from '../../../../../store/selectors';

const DropDown = ({title, id})=>{
  const sortByName = useSelector(sorting)
  const history = useHistory()
  const dispatch = useDispatch()
  const handleClick = ()=>{
      dispatch({type:'ADMIN_MANAGEMENT', title, id})
      history.push({pathname:`/PageList/${title}`})
  }
  return(
    <>
      {sortByName.map((elem)=><NavDropdown.Item  onClick={()=>handleClick(title, id)}>{elem.title}/{title}</NavDropdown.Item>)}
    </>
  )
}

export default DropDown;