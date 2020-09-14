import React, { useState, useEffect, useContext, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Context } from '../../context/ToDoContext';

function ToDoEditor() {
    const { setCurrentNoteId, updateNotes, getCurrentNote, notes } = useContext(Context);
    const textBox = useRef(null);

    const id = Number(useParams().todoId);
    const isNewNote = useParams().todoId === 'new-item';
    const [text, setText] = useState('');

    useEffect(() => {
        setCurrentNoteId(id);
    }, [id, setCurrentNoteId]);

    

    useEffect(() => {
        textBox.current.focus();
    }, [textBox]);

    const history = useHistory();

    useEffect(() => {
        const currentItem = getCurrentNote(id);
        if (currentItem) setText(currentItem.text);
        else if (!isNewNote) history.replace('/to-do/new-item');
    }, [getCurrentNote, id, notes, isNewNote, history]);

    const closeDialog = () => {
        history.push('/to-do');
    };

    const handleClick = () => {
        updateNotes(text);
        closeDialog();
    };

    const handleChange = e => {
        const { value } = e.target;
        setText(value);
    };

    return (
        <div className='modal' onClick={closeDialog}>
            <div onClick={e => e.stopPropagation()} className='to-do-box'>
                <input 
                    type='text'
                    ref={textBox}
                    value={text}
                    onChange={handleChange}
                    className='to-do-editor'
                    spellCheck='false'
                />
                <button onClick={handleClick} className='done-button'>
                    Done
                </button>
            </div>
        </div>
    );
}

export default ToDoEditor;