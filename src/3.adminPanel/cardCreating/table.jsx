import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './style.module.scss'
import ArchiveList from './dataIntheList';
import { useSelector } from 'react-redux';
import { titles } from '../../store/selectors';
const TableList = ({card})=>{
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
            {card.map((el)=><ArchiveList title={el.title} price={el.price} count={el.count} key={el.count}/>)}
        </Table>
    )
}

export default TableList;;