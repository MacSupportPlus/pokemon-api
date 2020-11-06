import './App.css';
import {useState, useEffect} from 'react';
import PokemonCard from './components/PokemonCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {



  const [results, setResults] = useState([]);

  const getPokemonResults = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(res => res.json())
      .then(res => setResults(res.results))
      .catch(err => console.log(err))
  }
  return (
    <div className="App">
      <button 
      className="btn btn-primary"
      onClick={getPokemonResults}
      >Pokemon Facts</button>
      <div className= "d-flex justify-content-around flex-wrap p-5">
        {
          results.map((n,i) => {
            return <PokemonCard 
                      result= {n}
                      key = {i}
                    />
          
          })
        }
      </div>
    </div>
  );
}

export default App;
