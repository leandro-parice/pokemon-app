import './style.css';

import { useSelector, useDispatch } from 'react-redux';

const Paginate = () => {
    const previous = useSelector(state => state.pages.previous);
    const next = useSelector(state => state.pages.next);

    const dispatch = useDispatch();

    const handlePrevious = () => {
        if(previous){
            dispatch({ type: 'PAGE_ACTUAL', actual: previous });
        }
    }

    const handleNext = () => {
        if(next){
            dispatch({ type: 'PAGE_ACTUAL', actual: next });
        }
    }

    return (
        <ul className="paginate">
            <li><button onClick={ handlePrevious } className={ previous ? "active" : null }>Anterior</button></li>
            <li><button onClick={ handleNext } className={ next ? "active" : null }>Próximo</button></li>
        </ul>
    );
}

export default Paginate