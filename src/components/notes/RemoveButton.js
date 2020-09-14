import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Context } from '../../context/NotesContext';

function RemoveButton({id}) {
    const {removeNote} = useContext(Context);
    const history = useHistory();

    const handleClick = () => {
        removeNote(id);
        history.replace('/notes');
    }

    return (
        <button onClick={handleClick} className='remove-button'>
            <i className="far fa-trash-alt"></i>
        </button>
    )
}

export default RemoveButton;