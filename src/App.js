import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from './components/Card';
import CardHome from './components/CardHome';
import Search from './components/Search';
import Title from './components/Title';
import Paginate from './components/Paginate';

const App = () => {
  const url = useSelector(state => state.actual);
  const pokemon_active = useSelector( state => state.pokemon_active);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: 'PAGE_PREVIOUS', previous: json.previous });
        dispatch({ type: 'PAGE_NEXT', next: json.next });
        setData(json['results'])
      })
      .catch((error) => console.log(error));
  }, [url]);

  useEffect(() => {
    if (data.length !== 0) {      
      setIsLoading(false);
    }
  }, [data]);
  
  return (
    <div className="app">
      <Title />
      <Search />
      <div className="categories">
        {isLoading ? <p>Carregando...</p> : data.map(pokemon => <CardHome key={pokemon.name} pokemon={pokemon} /> )}
      </div>
      <Paginate />
      <Card pokemon={pokemon_active} />
    </div>
  );
}

export default App;
