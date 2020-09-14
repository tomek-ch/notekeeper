import React, { useEffect } from 'react';
import useNotes from '../hooks/useNotes';

const Context = React.createContext();

function ContextProvider({children}) {
    const notesArr = JSON.parse(localStorage.getItem('notes'));

    const {
        notes,
        setCurrentNoteId,
        updateNotes,
        currentNoteId,
        getCurrentNote,
        removeNote,
    } = useNotes(notesArr);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    return (
        <Context.Provider value={{
            notes,
            setCurrentNoteId,
            updateNotes,
            currentNoteId,
            getCurrentNote,
            removeNote,
        }}>
            {children}
        </Context.Provider>
    )
}


export {Context, ContextProvider};