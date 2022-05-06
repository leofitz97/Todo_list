import _ from 'lodash';
import { createTodo } from './todo';
import { todo_func } from './todofunc';
import { load_project, main } from "./page"
import { homeTodo, todayTodo } from './homeTodo';
import './index.css'
import './todo.css'
import json from './todolist.json'

const load_page =()=>{
	const container = document.querySelector('#container')
	const menu_btn = document.createElement('button')
	const menu_div = document.createElement('div')
	const nav = document.createElement('nav')
	const menu = document.createElement('div')
	const Home = document.createElement('button')
	const Today = document.createElement('button')
	const Week = document.createElement('button')
	const header = document.createElement('header')
	const inner = document.createElement('div')
	//const main = document.createElement('div')
	const m = load_project()
	const h1 = document.createElement('h1')
	h1.textContent = 'Lemuel TODO List App'
	inner.id = 'hold'
	menu.id = 'menu'
	Home.textContent = 'Home'
	Home.id = 'home'
	Home.classList.add('navigate')
	Home.onclick = function(){navigate('todo_contents', 'grid')}
	Today.textContent = 'Today'
	Today.id =  'today'
	Today.classList.add('navigate')
	Today.onclick = function(){navigate('todayTodo', 'block')}
	Week.textContent = 'Week'
	Week.id = 'week'
	Week.classList.add('navigate')
	menu_btn.id = ('menu_btn')
	nav.id = 'nav-bar'
	menu_div.appendChild(menu_btn)
	menu_div.classList.add('btn-nav-div')
	
	header.appendChild(h1)
	container.appendChild(header)
	container.appendChild(menu_div)
	menu.appendChild(Home)
	menu.appendChild(Today)
	menu.appendChild(Week)
	//menu.appendChild(m)
	nav.appendChild(menu)
	nav.appendChild(m)
	inner.appendChild(nav)

	container.appendChild(inner)
}


load_page()
main()
todo_func.hide_navbar() 
createTodo()
todayTodo.createTodo()
homeTodo.createHome()
todo_func.add_todo_list()

const navigate = (page, display)=>{
	const navall = document.getElementsByClassName('navigate-todo')
	for (var i=0; i<navall.length; i++){
		navall[i].style.display = 'none'
	}
	document.getElementById(page).style.display = display
}

document.getElementById('home').click()
