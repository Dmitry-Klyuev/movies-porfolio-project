import React from 'react';

export const Header = () => {
    return (
        <nav className='purple lighten-1'>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo left">React Movies</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Repo</a></li>
                </ul>
            </div>
        </nav>
    );
};