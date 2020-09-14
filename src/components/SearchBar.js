import React, { useState } from 'react';

function SearchBar({ setRegExp, children }) {
    const [text, setText] = useState('');

    const handleChange = e => {
        const { value } = e.target;
        setText(value);
        setRegExp(new RegExp(value.replace(/[^a-zA-Z0-9 ]/g, ''), 'i'));
    };

    return (
        <div className='search-bar'>
            <i className="fas fa-search"></i>
            <input type='text' value={text} onChange={handleChange} placeholder={children} spellCheck='false' />
        </div>
    );
}

export default SearchBar;