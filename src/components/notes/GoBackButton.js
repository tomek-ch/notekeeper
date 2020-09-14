import React from 'react';
import {Link} from 'react-router-dom';

function GoBackButton() {
    return (
        <Link to='/notes' className='back-button'>
            <i className="fas fa-chevron-left"></i>
        </Link>
    )
}

export default GoBackButton;