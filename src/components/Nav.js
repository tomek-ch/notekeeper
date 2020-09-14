import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function Nav () {
    const isNotesActive = !!useRouteMatch('/notes');
    const isToDoActive = !!useRouteMatch('/to-do');

    return (
        <nav className='navbar'>
            <Link to='/notes' className={`nav-link ${isNotesActive && 'active'}`}>
                Notes
            </Link>
            <Link to='/to-do' className={`nav-link ${isToDoActive && 'active'}`}>
                To do
            </Link>
        </nav>
    );
}

export default Nav;