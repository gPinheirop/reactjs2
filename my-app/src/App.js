import { useState } from 'react';
import ColorDisplay from './ColorDisplay';
import ColorInputBar from './ColorInputBar';

function App() {

  const[colorValue, setColorValue] = useState('')

  return (
    <div className="App">
      <ColorDisplay colorValue={colorValue}/>
      <ColorInputBar 
        colorValue={colorValue}
        setColorValue={setColorValue}
      />
    </div>
  );
}

export default App;
