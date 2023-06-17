import React from 'react';
import { useForm } from 'react-hook-form';

const AddVehicle = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Handle form submission
        console.log(data);
    };

    return (
        <div>
            <p className="fs-4 fw-bold mt-4">Register new Vehicle</p>

            <form className="mt-4" style={{ maxWidth: '450px' }} onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="chasisNumber" className="form-label">Chasis Number</label>
                    <input type="text" className={`form-control ${errors.chasisNumber ? 'is-invalid' : ''}`} id="chasisNumber" {...register('chasisNumber', { required: 'Chasis Number is required' })} />
                    {errors.chasisNumber && <div className="invalid-feedback">{errors.chasisNumber.message}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="manufacturer" className="form-label">Manufacturer</label>
                    <input type="text" className={`form-control ${errors.manufacturer ? 'is-invalid' : ''}`} id="manufacturer" {...register('manufacturer', { required: 'Manufacturer is required' })} />
                    {errors.manufacturer && <div className="invalid-feedback">{errors.manufacturer.message}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="manufactureYear" className="form-label">Manufacture Year</label>
                    <input type="number" className={`form-control ${errors.manufactureYear ? 'is-invalid' : ''}`} id="manufactureYear" {...register('manufactureYear', { required: 'Manufacture Year is required' })} />
                    {errors.manufactureYear && <div className="invalid-feedback">{errors.manufactureYear.message}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" className={`form-control ${errors.price ? 'is-invalid' : ''}`} id="price" {...register('price', { required: 'Price is required' })} />
                    {errors.price && <div className="invalid-feedback">{errors.price.message}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="plateNumber" className="form-label">Plate Number</label>
                    <input type="text" className={`form-control ${errors.plateNumber ? 'is-invalid' : ''}`} id="plateNumber" {...register('plateNumber', { required: 'Plate Number is required' })} />
                    {errors.plateNumber && <div className="invalid-feedback">{errors.plateNumber.message}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="modelName" className="form-label">Model Name</label>
                    <input type="text" className={`form-control ${errors.modelName ? 'is-invalid' : ''}`} id="modelName" {...register('modelName', { required: 'Model Name is required' })} />
                    {errors.modelName && <div className="invalid-feedback">{errors.modelName.message}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="ownerId" className="form-label">Owner ID</label>
                    <input type="number" className={`form-control ${errors.ownerId ? 'is-invalid' : ''}`} id="ownerId" {...register('ownerId', { required: 'Owner ID is required' })} />
                    {errors.ownerId && <div className="invalid-feedback">{errors.ownerId.message}</div>}
                </div>

                <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#825ECB', borderColor: '#825ECB' }}>Save</button>
            </form>
        </div>
    );
};

export default AddVehicle;
