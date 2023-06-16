
import React from 'react';

const AddOwner = () => (
    <div>
        <p className="fs-4 fw-bold mt-4">Register Vehicle Owner</p>
        <p>Fill in the vehicle details</p>

        <form className="mt-4" style={{ maxWidth: '450px' }}>
            <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullname" />
            </div>
            <div className="mb-3">
                <label htmlFor="nationalId" className="form-label">National Id</label>
                <input type="text" className="form-control" id="nationalId" />
            </div>
            <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input type="number" className="form-control" id="phoneNumber" />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="number" className="form-control" id="address" />
            </div>

            <button type="submit"
                className="btn btn-primary w-100"
                style={{ backgroundColor: '#825ECB', borderColor: '#825ECB' }}>Save</button>
        </form>
    </div>
)

export default AddOwner;
