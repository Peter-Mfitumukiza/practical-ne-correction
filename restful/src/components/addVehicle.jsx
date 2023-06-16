
import React from 'react';

const AddVehicle = () => {
    return (
        <div>
            <p className="fs-4 fw-bold mt-4">Register new Vehicle</p>
            {/* <p>Fill in the vehicle details</p> */}

            <form className="mt-4" style={{ maxWidth: '450px' }}>
                <div className="mb-3">
                    <label htmlFor="chasisNumber" className="form-label">Chasis Number</label>
                    <input type="text" className="form-control" id="chasisNumber" />
                </div>
                <div className="mb-3">
                    <label htmlFor="manufacturer" className="form-label">Manufacturer</label>
                    <input type="text" className="form-control" id="manufacturer" />
                </div>
                <div className="mb-3">
                    <label htmlFor="manufactureYear" className="form-label">Manufacture Year</label>
                    <input type="number" className="form-control" id="manufactureYear" />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" />
                </div>
                <div className="mb-3">
                    <label htmlFor="plateNumber" className="form-label">Plate Number</label>
                    <input type="text" className="form-control" id="plateNumber" />
                </div>
                <div className="mb-3">
                    <label htmlFor="modelName" className="form-label">Model Name</label>
                    <input type="text" className="form-control" id="modelName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="ownerId" className="form-label">Owner ID</label>
                    <input type="text" className="form-control" id="ownerId" />
                </div>

                <button type="submit"
                    className="btn btn-primary w-100"
                    style={{ backgroundColor: '#825ECB', borderColor: '#825ECB' }}>Save</button>
            </form>
        </div>
    )
}

export default AddVehicle;
