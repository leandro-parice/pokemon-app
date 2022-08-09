import './style.css';

import { useSelector, useDispatch } from 'react-redux';

const Card = (props) => {

    const pokemon_name = useSelector(state => state.pokemon_name);
    const pokemon_image = useSelector(state => state.pokemon_image);
    const pokemon_data = useSelector(state => state.pokemon_data);

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch({ type: 'CHANGE_POKEMON', pokemon_active: 0 });
    }

    return (
        <div className={(props.pokemon > 0) ? 'card active' : 'card'}>
            <button className="close" onClick={handleClose}>X</button>
            <h2>{pokemon_name}</h2>
            <img src={pokemon_image} alt={pokemon_name} />
            <div className="card-data">
                Dados
            </div>
        </div>
    )
}

export default Card;