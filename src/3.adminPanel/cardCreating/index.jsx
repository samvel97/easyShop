import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableList from './table';
import css from './style.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { adminManagement } from '../../store/selectors';
import { useState } from 'react';
const CardCreating = ()=>{
    const dispatch = useDispatch()
    const [val, setVal] = useState({
        title:'',
        price:'',
        count:'',
        img:'',
    })
    const adminManagements = useSelector(adminManagement)
    
    const handleSubmit = (e)=>{
        setVal({...val,[e.target.name]:e.target.value})
    }

    const handleClick = ()=>{
        dispatch({type:'ADD_CARD', val})
    }

    return(
        <>
        <div className={css.content}>
        <h1>{adminManagements.title}</h1>
            <div className={css.forms}>
                <input type='text' className={css.inputs} value={val.title} onChange={handleSubmit} name='title'/>
                <input type='text' className={css.inputs} value={val.price} onChange={handleSubmit} name='price'/>
                <input type='text' className={css.inputs} value={val.count} onChange={handleSubmit} name='count'/>
                <input type='text' className={css.inputs} value={val.img} onChange={handleSubmit} name='img'/>
                <Button variant="outline-warning" className={css.creatingbutton} onClick={()=>handleClick()}>Submit</Button>
            </div>
            <TableList/>
        </div>
        </>
    )
}

export default CardCreating;