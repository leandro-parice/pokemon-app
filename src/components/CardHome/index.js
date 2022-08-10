import './style.css';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const CardHome = ({ pokemon }) => {

    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [image, setImage] = useState('');

    useEffect(() => {
        const url = pokemon.url;
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        if (data.length !== 0) {
            setImage(data.sprites.front_default);
        }
    }, [data]);

    useEffect(() => {
        if (image !== '') {
            setIsLoading(false);
        }
    }, [image]);

    const handleClick = () => {
        if (data.length !== 0) {
            dispatch({ type: 'CHANGE_POKEMON', pokemon: {active: true, data: data } });
        }
    }

    return (
        <section className={isLoading ? 'card-home' : 'card-home active'} onClick={ handleClick }>
            <img src="./images/loading.gif" alt="Carregando..." className="loading" />
            <div className="card-home-content">
                <img src={image} alt={pokemon.name} className="pokemon" />
                <h2>{pokemon.name}</h2>
            </div>
        </section >
    );
}

export default CardHome;