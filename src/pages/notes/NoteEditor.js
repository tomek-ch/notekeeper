import React from 'react';
import { useParams } from 'react-router-dom';

import GoBackButton from '../../components/notes/GoBackButton';
import TextBox from '../../components/notes/TextBox';
import RemoveButton from '../../components/notes/RemoveButton';

function NoteEditor() {
    const id = useParams().noteId;
    const isNewNote = id === 'new-note';

    return (
        <>
            <div className='note-nav'>
                <GoBackButton />
                {!isNewNote && <RemoveButton id={Number(id)}/>} 
            </div>

            <TextBox id={Number(id)} isNewNote={isNewNote} />
        </>
    );
}

export default NoteEditor;