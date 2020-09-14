import React, { useContext } from 'react';
import { Context } from '../../context/ToDoContext';

function RemoveButton({ id }) {
    const { removeNote } = useContext(Context);

    return (
        <div onClick={() => removeNote(id)} className='remove-button'>
            <i className="far fa-trash-alt"></i>
        </div>
    )
}

export default RemoveButton;