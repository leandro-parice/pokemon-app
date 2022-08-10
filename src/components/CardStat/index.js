import './style.css';

import CardStatTr from '../CardStatTr';

const CardStat = ({ data }) => {
    return (
        <table className="card-stat">
            <tbody>
                {data.map(stat => <CardStatTr key={stat.stat.name} data={stat} />)}
            </tbody>
        </table>
    )
}

export default CardStat;