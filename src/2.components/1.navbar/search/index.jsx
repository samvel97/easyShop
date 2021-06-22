import {Form,FormControl,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Search = ()=>{
    return(
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
            />
            <Button variant="outline-warning"> 
                Search
            </Button>
        </Form>
    )
}

export default Search;