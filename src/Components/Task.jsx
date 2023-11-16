const Task = ({title})=>
{
    return (
        <>

            <li className="list-group-item">
                <input type="checkbox" className="form-check-input" id="check"/>
                <label className="form-check-label" for="check">{title}</label>
                <button className="btn btn-success">Edit</button>
                <button className="btn btn-danger">Remove</button>
                
                
            </li>
        </>
    )
}
export default Task;