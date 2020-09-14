import React, { useEffect } from 'react';
import useNotes from '../hooks/useNotes';

const Context = React.createContext();

function ToDoContextProvider({ children }) {
    const toDoList = JSON.parse(localStorage.getItem('to-do'));

    const {
        notes,
        setCurrentNoteId,
        updateNotes,
        getCurrentNote,
        toggleDone,
        removeNote,
    } = useNotes(toDoList);

    useEffect(() => {
        localStorage.setItem('to-do', JSON.stringify(notes));
    }, [notes]);

    return (
        <Context.Provider value={{
            notes,
            setCurrentNoteId,
            updateNotes,
            getCurrentNote,
            toggleDone,
            removeNote,
        }}>
            {children}
        </Context.Provider>
    );
}

export { Context, ToDoContextProvider };