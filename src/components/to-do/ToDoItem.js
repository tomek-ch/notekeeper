import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../context/ToDoContext';
import RemoveButton from './RemoveButton';

function ToDoItem({ text, id, done }) {
    const { toggleDone } = useContext(Context);

    return (
        <div className='to-do-item'>
            <input
                type='checkbox'
                checked={done}
                onChange={() => toggleDone(id)}
                onClick={e => e.stopPropagation()}
                className='to-do-checkbox'
            />
            <Link to={`/to-do/${id}`} className={`to-do-text ${done && 'undone'}`}>
                {text}
            </Link>
            <RemoveButton id={id} />
        </div>
    );
}

export default ToDoItem;