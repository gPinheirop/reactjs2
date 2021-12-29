import { useState } from 'react';

import './App.css';
import ColorDiaplay from './ColorDiaplay';
import ColorInputBar from './ColorInputBar';

function App() {

const [newColor, setNewColor] = useState('');

// const [color, setColor] = useState('');

const handleSubmit = (e) =>{
  e.preventDefault();
  if (!newColor) return;
  // changeColor(newColor)
  setNewColor('');

}

  return (
    <div className="App">
      <h1>teste</h1>
      <ColorDiaplay/>
      <ColorInputBar 
        newColor = { newColor }
        setNewColor = { setNewColor }
        handleSubmit = { handleSubmit }
      />
    </div>
  );
}

export default App;
