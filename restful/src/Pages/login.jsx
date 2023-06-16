const LoginPage = () => {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#F3F5F9' }}>
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ width: '430px', maxWidth: '100%' }}>
                <form className="p-4 rounded bg-white shadow" style={{ width: '100%' }}>
                    <h2 className="text-center">Welcome back!</h2>
                    <p className="text-center">Please enter your details</p>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                    </div>
                    <div className="mb-3">
                        <button type="submit"
                            className="btn btn-primary btn-block w-100"
                            style={{ backgroundColor: '#825ECB', borderColor: '#825ECB'}}
                             >
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
