import React, { useState, useEffect, useRef } from 'react';

function JournalForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='journal-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='journal-input edit'
          />
          <button onClick={handleSubmit} className='journal-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a journal'
            value={input}
            onChange={handleChange}
            name='text'
            className='journal-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='journal-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default JournalForm;