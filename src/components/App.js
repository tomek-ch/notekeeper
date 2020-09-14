import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import '../styles/App.css';

import AllNotes from '../pages/notes/AllNotes';
import NoteEditor from '../pages/notes/NoteEditor';
import Nav from './Nav';
import ToDoList from '../pages/to-do/ToDoList';

function App() {
  return (
    <div className='app-container'>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Redirect to='/notes' />
        </Route>
        <Route exact path='/notes'>
          <AllNotes />
        </Route>
        <Route path='/notes/:noteId'>
          <NoteEditor />
        </Route>
        <Route path='/to-do'>
          <ToDoList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;