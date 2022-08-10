import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from './components/Card';
import CardHome from './components/CardHome';
import Search from './components/Search';
import Paginate from './components/Paginate';

const App = () => {
  const actual = useSelector(state => state.pages.actual);
  const pokemonActive = useSelector( state => state.pokemon.active);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(actual)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: 'PAGE_PREVIOUS', previous: json.previous });
        dispatch({ type: 'PAGE_NEXT', next: json.next });
        setData(json['results'])
      })
      .catch((error) => console.log(error));
  }, [actual]);

  useEffect(() => {
    if (data.length !== 0) {      
      setIsLoading(false);
    }
  }, [data]);
  
  return (
    <div className="app">
      <div className="categories">
        {isLoading ? <p>Carregando...</p> : data.map(pokemon => <CardHome key={pokemon.name} pokemon={pokemon} /> )}
      </div>
      <Paginate />
      {pokemonActive ? <Card active={pokemonActive} /> : null}      
    </div>
  );
}

export default App;
