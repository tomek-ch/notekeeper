import React, { useContext } from 'react';
import {Link} from 'react-router-dom';

import {Context} from '../../context/NotesContext';
import Time from './Time';

function NoteThumbnail({ note }) {
    const { id, text, time } = note;
    const {setCurrentNoteId} = useContext(Context);

    return (
        <Link to={`/notes/${id}`} className='note-thumbnail'>
            <div onClick={() => setCurrentNoteId(id)} className='note-text'>
                {text}
            </div>
            <Time timestamp={time} />
        </Link>
    );
}

export default NoteThumbnail;