import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './styles/index.css';

import App from './components/App';
import { ContextProvider } from './context/NotesContext';
import { ToDoContextProvider } from './context/ToDoContext';

ReactDOM.render(
  <React.StrictMode>
    <ToDoContextProvider>
      <ContextProvider>
        <Router>
          <App />
        </Router>
      </ContextProvider>
    </ToDoContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
