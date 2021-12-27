import
{
	ADD,
	ASYNC_ADD,
	SUB,
	SWITCH_THEME_TO_DARK,
	SWITCH_THEME_TO_LIGHT
} from './actionsType/actionsType'

const initialState = {
	counter: 0,
	themeColor: ''
}

export function rootReducer(state = initialState, action) {
	switch (action.type) {
		case ADD:
			return {...state, counter: state.counter + 1}

		case SUB:
			return {...state, counter: state.counter - 1}

		case ASYNC_ADD:
			return {...state, counter: state.counter + 1}

		case SWITCH_THEME_TO_LIGHT:
			return {...state, themeColor: ''}
		case SWITCH_THEME_TO_DARK:
			return {...state, themeColor: 'dark'}
		default:
			return state
	}
}