
import json from './todolist.json'
import { homeTodo } from './homeTodo'


export const todo_func =(()=>{
	let store = {'title':'', 'details':'', 'dueDate':'', 'priority':''}
	const add_todo=()=>{
		//json.todolist['title'] = document.getElementById('title').value
		//json.todolist['details'] = document.getElementById('details').value
		//json.todolist['dueDate'] = document.getElementById('dueDate').value
		//json.todolist['priority'] = document.getElementById('priority').value
		store['title'] = document.getElementById('title').value
		store['details'] = document.getElementById('details').value
		store['dueDate'] = document.getElementById('dueDate').value
		store['priority'] = document.getElementById('priority').value
 		console.log(store)
	}
	const add_todo_list =()=>{
		const btn = document.getElementById('submit-btn')
		btn.onclick = function(){
			add_todo()
			homeTodo.display(store)}
	}

	const view =()=>{
		console.log(json.todolist)
	}

	const hide_navbar=()=>{
		document.getElementById('menu_btn').onclick = function(){
			document.getElementById('main').hidden = 'true'
		}
	}
	return {add_todo_list, view, hide_navbar}
})()