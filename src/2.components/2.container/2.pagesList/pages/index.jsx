import { useSelector } from "react-redux";
import { adminManagement } from "../../../../store/selectors";
const Pages = ({title, price, count,img})=>{
    const adminManagements = useSelector(adminManagement)
    return(
        <>
          <hi>{adminManagements.title}</hi>
          <div>{title}</div>
          <div>{price}</div>
          <div>{count}</div>
          <img src={img}/>
        </>
    )
}

export default Pages;