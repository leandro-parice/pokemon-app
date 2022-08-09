import { createStore } from 'redux'

const INITIAL_STATE = {
	actual: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
	previous: null,
	next: null,
	pokemon_active: 0,
	pokemon_name: null,
	pokemon_image: null,
	pokemon_data: null
}

function appData(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'PAGE_ACTUAL':
			return { ...state, actual: action.actual };
		case 'PAGE_PREVIOUS':
			return { ...state, previous: action.previous };
		case 'PAGE_NEXT':
			return { ...state, next: action.next };
		case 'CHANGE_POKEMON':
			return { ...state, pokemon_active: action.pokemon_active, pokemon_name: action.pokemon_name, pokemon_image: action.pokemon_image, pokemon_data: action.pokemon_data };
		default:
			return state;
	}
}

const store = createStore(appData);

export default store;