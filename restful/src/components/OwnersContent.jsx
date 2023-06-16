import { useNavigate } from 'react-router-dom';

const OwnersContent = () => {
    const navigate = useNavigate();
    const addNewOwner = () => {
        navigate("/newOwner");
    }
    return (
        <>
            <p className="fs-4 fw-bold mt-4">Vehicle Owners</p>
            <div className="d-flex flex-row justify-content-between align-items-buttom mt-4">
                <p className="fw-bold">Registered vehicle owners</p>
                <button className="btn btn-primary"
                    style={{ backgroundColor: '#825ECB', borderColor: '#825ECB' }}
                    onClick={addNewOwner}
                    >
                    Add new vehicle owner
                </button>
            </div>  
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Owner Names</th>
                        <th>National Id</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>1 2004 1234342342</td>
                        <td>0791176743</td>
                        <td>ABC123</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Anne Doe</td>
                        <td>1 2004 1234342342</td>
                        <td>0791176743</td>
                        <td>ABC123</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>John Doe</td>
                        <td>1 2004 1234342342</td>
                        <td>0791176743</td>
                        <td>ABC123</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>John Doe</td>
                        <td>1 2004 1234342342</td>
                        <td>0791176743</td>
                        <td>ABC123</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default OwnersContent