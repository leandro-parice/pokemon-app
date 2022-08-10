import './style.css';

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

const Search = (props) => {
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch({ type: 'SEARCH', search: search });
    }

    const [search, setSearch] = useState('');

    const onChange = event => setSearch(event.target.value);    

    return (
        <div className="search">
            <input type="text" placeholder="Digite o nome do Pokemon" onChange={onChange} value={search} />
            <button onClick={handleSearch}>Procurar</button>
        </div>
    );
}

export default Search;
