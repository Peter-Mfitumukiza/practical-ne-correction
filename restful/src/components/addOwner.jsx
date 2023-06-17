import React from 'react';
import { useForm } from 'react-hook-form';

const AddOwner = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Handle form submission
        console.log(data);
    };

    return (
        <div>
            <p className="fs-4 fw-bold mt-4">Register Vehicle Owner</p>
            <p>Fill in the vehicle details</p>

            <form className="mt-4" style={{ maxWidth: '450px' }} onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="fullname" className="form-label">Full Name</label>
                    <input type="text" className={`form-control ${errors.fullname ? 'is-invalid' : ''}`} id="fullname" {...register('fullname', { required: 'Full Name is required' })} />
                    {errors.fullname && <div className="invalid-feedback">{errors.fullname.message}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="nationalId" className="form-label">National Id</label>
                    <input type="text" className={`form-control ${errors.nationalId ? 'is-invalid' : ''}`} id="nationalId" {...register('nationalId', { required: 'National Id is required' })} />
                    {errors.nationalId && <div className="invalid-feedback">{errors.nationalId.message}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <input type="number" className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`} id="phoneNumber" {...register('phoneNumber', { required: 'Phone Number is required' })} />
                    {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber.message}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className={`form-control ${errors.address ? 'is-invalid' : ''}`} id="address" {...register('address', { required: 'Address is required' })} />
                    {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
                </div>

                <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#825ECB', borderColor: '#825ECB' }}>Save</button>
            </form>
        </div>
    );
};

export default AddOwner;
