import React from 'react';
import './App.css';
import JournalList from './components/JournalList';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='journal-app'>
      <JournalList />
      <TaskList />
    </div>
  );
}

export default App;