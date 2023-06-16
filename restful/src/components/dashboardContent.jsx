
const DashboardContent = () => {
    return (
        <div>
            <p className="fw-bold fs-4 mt-4">Welcome back Peter,</p>
            <div className="d-flex flex-row">
                <div className="p-4 text-white" style={{ backgroundColor: '#825ECB', marginRight: '100px' }}>10,000  vehicles</div>
                <div className="p-4 text-white" style={{ backgroundColor: '#825ECB' }}>4,000  owners</div>
            </div>
            <p className="fw-bold fs-5 mt-4">Registered vehicles</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Chasis Number</th>
                        <th>Plate Number</th>
                        <th>Manufacture Company</th>
                        <th>Manufacture Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>ABC123</td>
                        <td>XYZ789</td>
                        <td>Company A</td>
                        <td>2022-01-01</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>DEF456</td>
                        <td>UVW123</td>
                        <td>Company B</td>
                        <td>2022-02-01</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>DEF456</td>
                        <td>UVW123</td>
                        <td>Company B</td>
                        <td>2022-02-01</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>DEF456</td>
                        <td>UVW123</td>
                        <td>Company B</td>
                        <td>2022-02-01</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DashboardContent