import { useSelector } from "react-redux";
import { adminManagement } from "../../../../store/selectors";
const Pages = ({title, price, count})=>{
    const adminManagements = useSelector(adminManagement)
    return(
        <>
          <hi>{adminManagements.title}</hi>
          <div>{title}</div>
          <div>{price}</div>
          <div>{count}</div>
        </>
    )
}

export default Pages;