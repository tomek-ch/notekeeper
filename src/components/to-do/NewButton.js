import React from 'react';
import { Link } from 'react-router-dom';

function NewButton() {
    return (
        <div className='new-button-wrapper'>
            <Link to='/to-do/new-item' className='new-button'>
                <i className="fas fa-plus"></i>
            </Link>
        </div>
    );
}

export default NewButton;