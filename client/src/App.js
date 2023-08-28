import axios from 'axios';
import {useState} from 'react';

function App() {
  const [obj, setObj] = useState('');
  
  async function show() {
    const response = await axios.get(' https://api.ipify.org/?format=json');
    console.log(response.data);
    setObj(response.data.ip);
  }

  return (
    <div className="App">
      <h1>{obj}</h1>
      <button onClick={show}>Click</button>
    </div>
  );
}

export default App;
