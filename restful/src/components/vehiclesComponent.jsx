import { useNavigate } from 'react-router-dom';

const VehiclesContent = () => {
    const navigate = useNavigate();
    const addNewVehicle = () => {
        navigate("/newVehicle");
    }
    return (
        <>
            <p className="fs-4 fw-bold mt-4">Vehicles</p>
            <div className="d-flex flex-row justify-content-between align-items-buttom mt-4">
                <p className="fw-bold">Registered vehicles</p>
                <button className="btn btn-primary"
                    style={{ backgroundColor: '#825ECB', borderColor: '#825ECB' }}
                    onClick={addNewVehicle}
                    >
                    Add new vehicle
                </button>
            </div>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Chasis Number</th>
                        <th>Plate Number</th>
                        <th>Manufacture Company</th>
                        <th>Manufacture Date</th>
                        <th>Owner National Id</th>
                        <th>Owner Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>ABC123</td>
                        <td>XYZ789</td>
                        <td>Company A</td>
                        <td>2022-01-01</td>
                        <td>1 2004 1234342342</td>
                        <td>John Doe</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>DEF456</td>
                        <td>UVW123</td>
                        <td>Company B</td>
                        <td>2022-02-01</td>
                        <td>1 2004 1234342342</td>
                        <td>John Doe</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>DEF456</td>
                        <td>UVW123</td>
                        <td>Company B</td>
                        <td>2022-02-01</td>
                        <td>1 2004 1234342342</td>
                        <td>John Doe</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>DEF456</td>
                        <td>UVW123</td>
                        <td>Company B</td>
                        <td>2022-02-01</td>
                        <td>1 2004 1234342342</td>
                        <td>John Doe</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default VehiclesContent