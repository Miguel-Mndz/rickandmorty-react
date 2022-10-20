import './App.css';
import imgHome from './img/RICK.PNG'
import { URLApi } from './api/api.js'
import { useState } from 'react';
import Characters from './components/Characters';

function App() {

  const [characters, setCharacters] = useState(null)

  const api = async () => {
    const api = await fetch(URLApi)
    const charactersApi = await api.json()
    setCharacters(charactersApi.results)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Welcome to </h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img src={imgHome} alt='Rick & Morty' className='img-home' />
            <button onClick={api} className='btn-search'>Show Characters</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
