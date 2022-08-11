import './style.css';

const CardType = (props) => {
    return (
        <div className="card-types">
            {props.types.map(type => (<span key={type.type.name}>{type.type.name}</span>))}
        </div>
    )
}

export default CardType;