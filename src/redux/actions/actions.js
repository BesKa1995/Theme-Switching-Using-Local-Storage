import {
	ADD,
	ASYNC_ADD,
	SUB,
	SWITCH_THEME_TO_DARK,
	SWITCH_THEME_TO_LIGHT
} from '../actionsType/actionsType'

export function add() {
	return {
		type: ADD
	}
}

export function sub() {
	return {
		type: SUB
	}
}

export function asyncAdd() {
	return {
		type: ASYNC_ADD
	}
}

export function switchThemeToLigth() {
	return {
		type: SWITCH_THEME_TO_LIGHT
	}
}



export function switchThemeToDark() {
	return {
		type: SWITCH_THEME_TO_DARK
	}
}




