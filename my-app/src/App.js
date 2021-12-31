import { useState } from 'react';
import ColorDisplay from './ColorDisplay';
import ColorInputBar from './ColorInputBar';

function App() {

  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="App">
      <ColorDisplay
       colorValue={colorValue}
       hexValue={hexValue}
       isDarkText={isDarkText}
      />
      <ColorInputBar 
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
