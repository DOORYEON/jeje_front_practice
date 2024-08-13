// Header.js
import React from 'react';
import '../styles/App.css'; // 또는 Header.css

function Header() {
    return (
        <div className='header'>
            <div className='logo'>AppLogo</div>
            <div className='icon-container'>
                <img src='/path/to/notification_icon.png' alt='Notification' className='icon' />
                <img src='/path/to/settings_icon.png' alt='Settings' className='icon' />
            </div>
        </div>
    );
}

export default Header;
