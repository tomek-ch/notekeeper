import React, { useContext, useState } from 'react';

import NewButton from '../../components/notes/NewButton';
import NoteThumbnail from '../../components/notes/NoteThumbnail';
import { Context } from '../../context/NotesContext';
import SearchBar from '../../components/SearchBar';

function AllNotes() {
    const { notes } = useContext(Context);
    const [regExp, setRegExp] = useState(new RegExp(''));

    const noteElements = notes.filter(item => regExp.test(item.text)).map(note => (
        <NoteThumbnail key={note.id} note={note}/>
    ));

    return (
        <>
            <SearchBar setRegExp={setRegExp}>
                Search notes
            </SearchBar>
            <NewButton />
            <div className='notes'>
                {noteElements}
            </div>
        </>
    );
}

export default AllNotes;