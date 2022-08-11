import './style.css';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CardStat from '../CardStat';
import CardData from '../CardData';
import CardType from '../CardType';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {

    const pokemon = useSelector(state => state.pokemon);

    const dispatch = useDispatch();

    const [className, setClassName] = useState('card');

    const handleClose = () => {
        setClassName('card');
        setTimeout(() => {
            dispatch({ type: 'CHANGE_POKEMON', pokemon: { active: false, data: null } });
        }, 300);
    }

    useEffect(() => {
        setTimeout(() => {
            setClassName('card active');
        }, 10);
    }, []);

    return (
        <div className={className}>
            <button className="close" onClick={handleClose}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="avatar">
                <img src={pokemon.data.sprites.front_default} alt={pokemon.data.name} />
            </div>
            <div className="card-content">
                <h2>{pokemon.data.name}</h2>

                <CardType types={pokemon.data.types} />

                <CardData height={pokemon.data.height} weight={pokemon.data.weight} base_experience={pokemon.data.base_experience} />

                <CardStat data={pokemon.data.stats} />
            </div>
        </div>
    )
}

export default Card;