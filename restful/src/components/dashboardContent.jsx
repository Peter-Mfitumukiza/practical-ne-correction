import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardContent = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5001/api/v1/vehicle/with-owners', {
                    headers: { Authorization: `Bearer ${token}` }
                });

                if (response.status === 200) {
                    console.log(response.data);
                    setVehicles(response.data.data);
                }
            } catch (error) {
                console.log('Error occurred while fetching vehicles:', error);
            }
        };

        fetchVehicles();
    }, []);

    return (
        <div>
            <p className="fw-bold fs-4 mt-4">Welcome back Peter,</p>
            <div className="d-flex flex-row">
                <div className="p-4 text-white" style={{ backgroundColor: '#825ECB', marginRight: '100px' }}>10,000 vehicles</div>
                <div className="p-4 text-white" style={{ backgroundColor: '#825ECB' }}>4,000 owners</div>
            </div>
            <p className="fw-bold fs-5 mt-4">Registered vehicles</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Chasis Number</th>
                        <th>Plate Number</th>
                        <th>Manufacturer Company</th>
                        <th>Manufacture Year</th>
                        <th>Owner NID</th>
                        <th>Owner Names</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(vehicles) && vehicles.length > 0 ? (
                        vehicles.map((vehicle, index) => (
                            <tr key={vehicle._id}>
                                <td>{index + 1}</td>
                                <td>{vehicle.chasisNumber}</td>
                                <td>{vehicle.plateNumber}</td>
                                <td>{vehicle.manufacturer}</td>
                                <td>{vehicle.manufactureYear}</td>
                                <td>{vehicle.ownerDetails[0].nationalId}</td>
                                <td>{vehicle.ownerDetails[0].fullname}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No vehicles found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DashboardContent;
