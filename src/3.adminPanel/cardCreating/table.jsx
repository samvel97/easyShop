import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './style.module.scss'
import ArchiveList from './dataIntheList';
import { useSelector } from 'react-redux';
import { addCard } from '../../store/selectors';
const TableList = ()=>{
    const data = useSelector(addCard)
    return(
        <Table striped bordered hover variant="dark" className={css.table}>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Price</th>
                <th>Count</th>
                </tr>
            </thead>
            {data.map((elem)=><ArchiveList title={elem.title} price={elem.price} count={elem.count} key={elem.count}/>)}
        </Table>
    )
}

export default TableList;;