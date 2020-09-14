import React, { useContext, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Context } from '../../context/ToDoContext';
import NewButton from '../../components/to-do/NewButton';
import ToDoEditor from '../../components/to-do/ToDoEditor';
import ToDoItem from '../../components/to-do/ToDoItem';
import SearchBar from '../../components/SearchBar';

function ToDoList() {
    const { notes } = useContext(Context);
    const [ regExp, setRegExp ] = useState(new RegExp(''));

    const toDoItems = notes.filter(item => regExp.test(item.text)).map(item => <ToDoItem
            key={item.id}
            text={item.text}
            id={item.id}
            done={item.done}
         />);

    return (
        <>
            <SearchBar setRegExp={setRegExp}>
                Search tasks
            </SearchBar>
            <NewButton />
            {toDoItems}
            <Switch>
                <Route path='/to-do/:todoId'>
                    <ToDoEditor />
                </Route>
            </Switch>
        </>
    )
}

export default ToDoList;