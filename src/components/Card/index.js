import './style.css';

import CardStat from '../CardStat';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
            <button className="close" onClick={handleClose}>X</button>
            <div className="avatar">
                <img src={pokemon.data.sprites.front_default} alt={pokemon.data.name} />
            </div>
            <div className="card-data">
                <h2>{pokemon.data.name}</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Altura</td>
                            <td>{(pokemon.data.height / 10)} m</td>
                        </tr>
                        <tr>
                            <td>Peso</td>
                            <td>{(pokemon.data.weight / 10)} kg</td>
                        </tr>
                        <tr>
                            <td>Experiência básica</td>
                            <td>{pokemon.data.base_experience}</td>
                        </tr>                        
                    </tbody>
                </table>

                <CardStat data={pokemon.data.stats} />
                
                <div className="types">
                    { pokemon.data.types.map( type => (<span key={type.type.name}>{type.type.name}</span>) ) }
                </div>
            </div>
        </div>
    )
}

export default Card;