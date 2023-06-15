import React from 'react';

const Sidebar = () => {
    return (
        <div className="d-flex flex-column sidebar" style={{ backgroundColor: '#D3D0DF', width: '100%', height: '100vh', padding: '2rem' }}>
            <div className="user-profile mb-5">
                <span className="user-name" style={{ fontWeight: 'bold' }}>Rukundo Promesse</span>
            </div>
            <nav className="nav flex-column flex-grow-1 sidebar-nav">
                <a className="nav-link" href="/dashboard" style={{ padding: 0, marginBottom: '.8rem', color: '#000' }} >Dashboard</a>
                <a className="nav-link" href="/vehicles" style={{ padding: 0, marginBottom: '.8rem', color: '#000' }}>Vehicles</a>
                <a className="nav-link" href="/owners" style={{ padding: 0, marginBottom: '.8rem', color: '#000' }}>Vehicle Owners</a>
                <a className="nav-link" href="/settings" style={{ padding: 0, color: '#000' }}>Settings</a>
            </nav>
            <div className="mt-auto">
                <a href="/logout" className="nav-link">Logout</a>
            </div>
        </div>
    );
};

export default Sidebar;