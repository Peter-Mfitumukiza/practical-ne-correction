import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const LoginPage = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        try {
            setLoading(true); // Start the loader

            const response = await axios.post('http://localhost:5001/api/v1/auth/login', data);
            if (response.status === 200) {
                // Login successful
                const { token, userInfo } = response.data;

                // Set the token in localStorage
                authService.login(token);
                // save userInfo in localStorage
                authService.saveUserInfo(userInfo);
                // Redirect to the dashboard or any other route
                navigate('/dashboard');
            } else {
                // Login failed
                setErrorMessage('Invalid email or password');
            }
        } catch (error) {
            console.log('Error occurred during login:', error);
            // Handle any other errors that occurred during login
            setErrorMessage('Invalid email or password');
        } finally {
            setLoading(false); // Stop the loader
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#F3F5F9' }}>
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ width: '430px', maxWidth: '100%' }}>
                <form className="p-4 rounded bg-white shadow" style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-center">Welcome back!</h2>
                    <p className="text-center">Please enter your details</p>

                    {errorMessage && <p className="text-danger text-center mb-3">{errorMessage}</p>}

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
                        <button type="submit" className="btn btn-primary btn-block w-100" style={{ backgroundColor: '#825ECB', borderColor: '#825ECB' }} disabled={loading}>
                            {loading ? (
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            ) : (
                                'Sign In'
                            )}
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
