import { useState } from 'react'
import './App.css'
import PokemonCard from './PokemonCard.jsx'

function App() {
  let [clickedPokemon, updateClickedPokemon] = useState([])
  let [score, setScore] = useState(0)
  const randomPokemonId = () => Math.round(Math.random() * (11 - 1) + 1); // This is the range of pokemon available. I want to make this dynamic.
  const [id, setId] = useState(randomPokemonId)
  const [numberOfCards, setNumberOfCards] = useState(6);
  let [highScore, setHighScore] = useState(0)

  console.log("Current clickedPokemon state:", clickedPokemon);

  const handleLoss = (name) => {
    console.log(`${name} is already in here!`)
    highScore<score ? setHighScore(score) : {}
    setScore(0)
    console.log(' score is 0')
    alert(`${name} was already clicked!`)
    updateClickedPokemon([])
  }

  const handleWin = () => {
    setScore(prevScore => prevScore + 1)
  }

  const handlePokemonCardClick = (name) => {
    updateClickedPokemon(prevClickedPokemon => [...prevClickedPokemon, name]);
    clickedPokemon.includes(name) ?
    handleLoss(name) :
    handleWin()
  }

  const moreCards = () => {score > 0 ? alert('Can only change before the game starts') : setNumberOfCards(prevNumber => prevNumber + 1)}
  const lessCards = () => {score > 0 ? alert('Can only change before the game starts') : setNumberOfCards(prevNumber => prevNumber - 1)}
  
  return (
    <>
      <h1>PokeMemory</h1>
      <div className="card">
        <p>Click a card. But don't click on the same one twice!</p>
      </div>
      <p>How many cards do you want visible?</p>
      <div className="counter">
        <img src="/src/assets/fontawesome-free-6.7.2-web/fontawesome-free-6.7.2-web/svgs/solid/arrow-up.svg" alt="Up" className='arrow' onClick={() => moreCards()}/>
        <p>{numberOfCards}</p>
        <img src="/src/assets/fontawesome-free-6.7.2-web/fontawesome-free-6.7.2-web/svgs/solid/arrow-down.svg" alt="Up" className='arrow' onClick={() => lessCards()}/>
      </div>
      <button className="reset" onClick={() => {setScore(0)}}>reset</button>
      <h2 className="score-holder">Score: {score}</h2>
      <h2 className="score-holder">High Score: {highScore}</h2>
      <div className="card-holder">
        {Array.from({length:numberOfCards}, (_, index) => index).map((item) => (
           <PokemonCard handlePokemonCardClick={handlePokemonCardClick} key={item} id={randomPokemonId()}/>
         ))}
      </div>
    </>
  )
}

export default App
