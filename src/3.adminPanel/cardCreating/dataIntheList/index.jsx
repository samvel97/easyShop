const ArchiveList = ({title, price, count, id})=>{
    return(
        <>
            <tbody>
                <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{price}</td>
                <td>{count}</td>
                </tr>
                <tr>
                </tr>
            </tbody>
        </>
    )
}
export default ArchiveList;