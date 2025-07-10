import React, { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('Editable Title');
  const [text, setText] = useState('This is a textbox that you can edit.');

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="title-input"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="text-area"
        />
      </header>
    </div>
  );
}

export default App;
