import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async(data) => {
        try {
            const response = await axios.post("http://localhost:3001/api/v1/auth/login", data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
        // Handle form submission
        // console.log(data);
    };

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#F3F5F9' }}>
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ width: '430px', maxWidth: '100%' }}>
                <form className="p-4 rounded bg-white shadow" style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-center">Welcome back!</h2>
                    <p className="text-center">Please enter your details</p>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="email" placeholder="Enter your email" {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })} />
                        {errors.email && <div className="invalid-feedback text-danger">{errors.email.message}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} id="password" placeholder="Enter your password" {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters long' } })} />
                        {errors.password && <div className="invalid-feedback text-danger">{errors.password.message}</div>}
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary btn-block w-100" style={{ backgroundColor: '#825ECB', borderColor: '#825ECB' }}>
                            Sign In
                        </button>
                    </div>
                    <div className="text-center mb-3">
                        <a href="#" style={{ color: '#825ECB', textDecoration: 'none', fontSize: '15px' }}>Forgot password?</a>
                    </div>
                    <p className="text-center" style={{ fontSize: '15px' }}>Don't have an account? <a href="/signup" style={{ color: '#825ECB', textDecoration: 'none' }}>Sign up here</a></p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
