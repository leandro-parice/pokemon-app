import './style.css'

const CardData = (props) => {
    return (
        <table className="card-data">
            <tbody>
                <tr>
                    <td>Altura</td>
                    <td>{(props.height / 10)} m</td>
                </tr>
                <tr>
                    <td>Peso</td>
                    <td>{(props.weight / 10)} kg</td>
                </tr>
                <tr>
                    <td>Experiência básica</td>
                    <td>{props.base_experience}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default CardData;