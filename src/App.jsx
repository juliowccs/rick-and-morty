import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header';

function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((Response) => Response.json())
    .then((data) => setDados(data.results))
    .catch((error) => console.log(error))
  })

  return (
    <div className='App'>
        <Header></Header>
      <div className='flex'>
      {dados.map((item) => (
        <div  key={item.id}>
          <h2>{item.name}</h2>
          <img src={item.image}></img>
          <p>Status - {item.status}</p>
        </div>
      ))}
      </div>
    </div>
  )}
export default App
