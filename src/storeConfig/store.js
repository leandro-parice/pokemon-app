import { createStore } from 'redux'

const INITIAL_STATE = {
	pages: {
		actual: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
		previous: null,
		next: null
	},
	search: {
		active: false,
		data: null
	},
	pokemon: {
		active: false,
		data: null,
	}
}

function appData(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'PAGE_ACTUAL':
			return { ...state, pages: { ...state.pages, actual: action.actual } };
		case 'PAGE_PREVIOUS':
			return { ...state, pages: { ...state.pages, previous: action.previous } };
		case 'PAGE_NEXT':
			return { ...state, pages: { ...state.pages, next: action.next } };

		case 'CHANGE_POKEMON':
			return { ...state, pokemon: action.pokemon };

		case 'SEARCH':
			return { ...state, search: action.search };
		default:
			return state;
	}
}

const store = createStore(appData);

export default store;