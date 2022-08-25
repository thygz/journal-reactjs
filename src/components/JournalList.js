import React, { useState } from 'react';
import JournalForm from './JournalForm';
import Journal from './Journal';

function JournalList() {
  const [journals, setJournals] = useState([]);

  const addJournal = journal => {
    if (!journal.text || /^\s*$/.test(journal.text)) {
      return;
    }

    const newJournals = [journal, ...journals];

    setJournals(newJournals);
    console.log(...journals);
  };

  const updateJournal = (journalId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setJournals(prev => prev.map(item => (item.id === journalId ? newValue : item)));
  };

  const removeJournal = id => {
    const removedArr = [...journals].filter(journal => journal.id !== id);

    setJournals(removedArr);
  };

  const completeJournal = id => {
    let updatedJournals = journals.map(journal => {
      if (journal.id === id) {
        journal.isComplete = !journal.isComplete;
      }
      return journal;
    });
    setJournals(updatedJournals);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <JournalForm onSubmit={addJournal} />
      <Journal
        journals={journals}
        completeJournal={completeJournal}
        removeJournal={removeJournal}
        updateJournal={updateJournal}
      />
    </>
  );
}

export default JournalList;