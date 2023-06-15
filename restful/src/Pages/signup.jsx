const SignupPage = () => {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#F3F5F9' }}>
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ width: '430px', maxWidth: '100%' }}>
                <form className="p-4 rounded bg-white shadow" style={{ width: '100%' }}>
                    <h2 className="text-center">WELCOME TO VMS</h2>
                    <p className="text-center">Fill in the information to continue</p>
                    <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                        <input type="tel" className="form-control" id="phoneNumber" placeholder="Enter your phone number" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nationalId" className="form-label">National ID</label>
                        <input type="text" className="form-control" id="nationalId" placeholder="Enter your national ID" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary btn-block w-100" style={{ backgroundColor: '#825ECB', borderColor: '#825ECB' }}>
                            Sign Up
                        </button>
                    </div>
                    <p className="text-center" style={{ fontSize: '15px' }}>Already have an account? <a href="/login" style={{ color: '#825ECB', textDecoration: 'none' }}>Sign in here</a></p>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
