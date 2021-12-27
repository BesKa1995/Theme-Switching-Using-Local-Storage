import {createStore} from './createStore'
import {rootReducer} from './redux/rootReducer'

import './styles.css'


import {
	add,
	asyncAdd,
	sub,
	switchThemeToDark,
	switchThemeToLigth
} from './redux/actions/actions'


const store = createStore(rootReducer)


const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const theme = document.getElementById('theme')


if (!localStorage.getItem('theme')) {
	localStorage.setItem('theme', store.getState().themeColor)
}

addBtn.addEventListener('click', () => {
	store.dispatch(add())
	render()
})


subBtn.addEventListener('click', () => {
	store.dispatch(sub())
	render()
})


asyncBtn.addEventListener('click', () => {
	setTimeout(() => {
		store.dispatch(asyncAdd())
		render()
	}, 2000)
})

theme.addEventListener('click', () => {
	if (localStorage.getItem('theme').includes('dark')) {
		store.dispatch(switchThemeToLigth())
	} else {
		store.dispatch(switchThemeToDark())

	}

	localStorage.setItem('theme', store.getState().themeColor)

	render()
})


function render() {
	document.body.classList = localStorage.getItem('theme')
	counter.textContent = store.getState().counter
}

render()