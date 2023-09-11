import axios from 'axios';
import { useEffect, useState } from 'react';
import style from './app.module.css'

function App() {
  const [obj, setObj] = useState('');
  useEffect(() => {
    send()
  }, []);

  async function send() {
    const result = await axios.get('https://api.ipify.org/?format=json');
    setObj(result.data.ip);
  }

  return (
    <div className={style.wrapper}>
      <h1>{obj}</h1>
      <p>37.215.53.63 ( This is your IP address...probably :P )</p>
    </div>
  );
}

export default App;
