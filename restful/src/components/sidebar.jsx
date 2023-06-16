import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="d-flex flex-column sidebar" style={{ backgroundColor: '#D3D0DF', width: '100%', height: '100vh', padding: '2rem' }}>
            <div className="user-profile mb-5">
                <span className="user-name" style={{ fontWeight: 'bold' }}>
                    Rukundo Promesse
                </span>
            </div>
            <nav className="nav flex-column flex-grow-1 sidebar-nav">
                <NavLink exact to="/dashboard" className="nav-link p-0" activeClassName="fw-bold" style={{ marginBottom: '.8rem', color: '#000' }}>
                    Dashboard
                </NavLink>
                <NavLink exact to="/vehicles" className="nav-link p-0" activeClassName="fw-bold" style={{ marginBottom: '.8rem', color: '#000' }}>
                    Vehicles
                </NavLink>
                <NavLink exact to="/owners" className="nav-link p-0" activeClassName="fw-bold" style={{ marginBottom: '.8rem', color: '#000' }}>
                    Vehicle Owners
                </NavLink>
                <NavLink exact to="/settings" className="nav-link p-0" activeClassName="fw-bold" style={{ color: '#000' }}>
                    Settings
                </NavLink>
            </nav>
            <div className="mt-auto">
                <a href="/logout" className="nav-link">
                    Logout
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
