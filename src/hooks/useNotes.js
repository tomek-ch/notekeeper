import { useState } from 'react';

function useNotes(initialState) {
    const [notes, setNotes] = useState(initialState || []);
    const [currentNoteId, setCurrentNoteId] = useState(null);
    
    const addNewNote = text => setNotes(prevNotes => [{
        done: false,
        text,
        time: (new Date()).getTime(),
        id: (new Date()).getTime(),
    }, ...prevNotes]);

    const removeNote = id => {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
    }

   function noteExists(id) {
        return notes.find(note => note.id === id);
    }

    function editNote(text, id) {
        setNotes(prevNotes => prevNotes.map(note => {
            if (id === note.id) return {
                ...note,
                text,
                time: (new Date()).getTime(),
            }
            return note;
        }).sort((a, b) => b.time - a.time).sort((a, b) => a.done - b.done));
    }

    function updateNotes(text) {
        if (noteExists(currentNoteId) && text && text !== getCurrentNote(currentNoteId).text) editNote(text, currentNoteId);
        else if (text && !noteExists(currentNoteId)) addNewNote(text);
        else if (!text) removeNote(currentNoteId);
    }

    function getCurrentNote(id) {
        return notes.find(note => note.id === id);
    }

    function toggleDone(id) {
        setNotes(prevItems => prevItems.map(item => {
            if (item.id === id) return {
                ...item,
                done: !item.done,
            }
            return item;
        }).sort((a, b) => b.time - a.time).sort((a, b) => a.done - b.done));
    }

    return {
        notes,
        setCurrentNoteId,
        updateNotes,
        currentNoteId,
        getCurrentNote,
        removeNote,
        toggleDone
    };
}

export default useNotes;