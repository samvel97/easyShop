import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableList from './table';
import css from './style.module.scss'
import { useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import { sorting } from '../../store/selectors';
import Checkboxes from './checkboxes';
const CardCreating = ({id, title, card})=>{
    const sort = useSelector(sorting)
    const dispatch = useDispatch()
    const [val, setVal] = useState({
        title:'',
        price:'',
        count:'',
    })
    
    const handleSubmit = (e)=>{
        setVal({...val,[e.target.name]:e.target.value})
    }

    const handleClick = ()=>{
        dispatch({type:'ADD_CARD', val,id})
        setVal({
            title:'',
            price:'',
            count:'',
        })
    }

    return(
        <>
        <div className={css.content}>
        <h1>{title}</h1>
            <div className={css.forms}>
                <input type='text' className={css.inputs} value={val.title} onChange={handleSubmit} name='title'/>
                <input type='text' className={css.inputs} value={val.price} onChange={handleSubmit} name='price'/>
                <input type='text' className={css.inputs} value={val.count} onChange={handleSubmit} name='count'/>
                {sort.map((elem)=>
                    <Checkboxes id={elem.id} title={elem.title} key={elem.id} checked={elem.checked} />
                    )}
                <Button variant="outline-warning" className={css.creatingbutton} onClick={()=>handleClick()}>Submit</Button>
            </div>
            <TableList card={card}/>
        </div>
        </>
    )
}

export default CardCreating;