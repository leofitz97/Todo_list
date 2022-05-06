import json from './todolist.json'

export const homeTodo =(()=>{

	const createHome = ()=>{
		const container = document.querySelector('#todolist')
		const home = document.createElement('div')
		const table = document.createElement('table')
		const tr = document.createElement('tr')
		const title = document.createElement('td')
		const date = document.createElement('td')
		const prio = document.createElement('td')
		table.id = 'todoTable'
		title.textContent = 'Title'
		date.textContent = 'Date      Time'
		prio.textContent = 'Priority'
		tr.appendChild(title)
		tr.appendChild(date)
		tr.appendChild(prio)
		table.appendChild(tr)
		home.appendChild(table)
		container.appendChild(home)
	}

	const display=(store)=>{
		var mytable = document.getElementById('todoTable')
		var row = mytable.insertRow();
		row.classList.add('list')
		var title = row.insertCell();
		var date = row.insertCell();
		var prio = row.insertCell();
		title.textContent = store.title
		date.textContent = store.dueDate
		prio.textContent = store.priority
	}
	return {createHome, display}
})()


export const todayTodo=(() =>{
	const createTodo=()=>{
		const main = document.querySelector('#main')
		const container = document.createElement('div')
		const todos = document.createElement('div')
		const header = document.createElement('h2')
		container.classList.add('navigate-todo')
		container.id = 'todayTodo'
		todos.id = 'todolist'
		header.textContent = 'Today list of todos'
		//todos.innerHTML = homeTodo.display()
		container.appendChild(header)
		container.appendChild(todos)
		main.appendChild(container)	
	}
	return {createTodo}
})()


