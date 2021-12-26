import './styles.css'

if (!localStorage.getItem('theme')) {
	localStorage.setItem('theme', '')
}

let state = 0
const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const theme = document.getElementById('theme')

addBtn.addEventListener('click', () => {
	state++
	render()
})


subBtn.addEventListener('click', () => {

	state--
	render()
})


asyncBtn.addEventListener('click', () => {
	setTimeout(() => {
		state++
		render()
	}, 2000)
})

theme.addEventListener('click', () => {
	localStorage.getItem('theme') === 'dark'
		? localStorage.setItem('theme', '')
		: localStorage.setItem('theme', 'dark')


	document.body.classList.contains('dark')
		? document.body.classList.remove('dark')
		: document.body.classList.add(localStorage.getItem('theme'))

})


function render() {
	counter.textContent = state
	document.body.classList.add(localStorage.getItem('theme'))
}

render()

