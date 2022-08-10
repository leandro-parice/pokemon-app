import './style.css';

import { useState, useEffect } from 'react';

const CardStatTr = ({ data }) => {

    const [name, setName] = useState('');
    const [style, setStyle] = useState({});

    useEffect(() => {
        switch (data.stat.name) {
            case 'hp': setName('HP'); break;
            case 'attack': setName('AT'); break;
            case 'defense': setName('DF'); break;
            case 'special-attack': setName('SAT'); break;
            case 'special-defense': setName('SDF'); break;
            case 'speed': setName('SPD'); break;
            default: setName(data.stat.name);
        }

        const width = (data.base_stat / 2);
        let backgroundColor = 'tomato';
        if(width >= 50){
            backgroundColor = 'limegreen';
        }

        setStyle({ width: width+'%', backgroundColor})
    }, []);


    return (


        <tr className="card-stat-tr">
            <td className="td-name">{name}</td>
            <td className="td-stat">{data.base_stat}</td>
            <td className="td-bad">
                <div className="bar-progress-inner">
                    <div className="bar-progress-bg" style={style}></div>
                </div>
            </td>
        </tr>
    )
}

export default CardStatTr;