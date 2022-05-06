



export const createTodo=()=>{

	const sel = document.querySelector('#main')
	const contents = document.createElement('div')
	const div_tit = document.createElement('div')
	const div_descrp = document.createElement('div')
	const div_date = document.createElement('div')
	const div_prio = document.createElement('div')
	const div_btn = document.createElement('div')
	contents.classList.add('navigate-todo')
	div_date.classList.add('inner')
	div_prio.classList.add('inner')
	contents.id = 'todo_contents'
	const h2 = document.createElement('h2')
	h2.textContent = 'Todos List'
	const title_h = document.createElement('h3')
	title_h.textContent = 'Title'
	const title =	document.createElement('input')
	title.type = 'text'
	title.id = 'title'
	title.value =  ''
	title.placeholder = 'What do you want to do?'
	const details_h = document.createElement('h3')
	details_h.textContent = 'Details'
	const descrp = document.createElement('textarea')
	descrp.value = descrp.textContent = ''
	descrp.id = 'details'
	descrp.placeholder = 'what are the details?'
	const submit = document.createElement('button')
	submit.textContent = 'Add Todo'
	submit.type = 'button'
	submit.id='submit-btn'
	const ddate = document.createElement('h3')
	ddate.textContent = 'dueDate'
	const date = document.createElement('input')
	date.type = 'datetime-local'
	date.id = 'dueDate'
	date.value = '2020-05-15T12:00'
	const prioh = document.createElement('h3')
	prioh.textContent = 'Set Priorty'
	const select = document.createElement('select')
	const opt1 = document.createElement('option')
	const opt2 = document.createElement('option')
	const opt3 = document.createElement('option')
	select.name = 'priority'
	select.id = 'priority'
	opt1.value = 'low'
	opt1.text = 'Low'
	opt2.value = 'medium'
	opt2.text = 'Medium'
	opt3.value = 'high'
	opt3.text = 'High'
	div_prio.id = 'prior'
	div_btn.id = 'sub'
	sel.appendChild(h2)
	div_tit.appendChild(title_h)
	div_tit.appendChild(title)
	contents.appendChild(div_tit)
	div_descrp.appendChild(details_h)
	div_descrp.appendChild(descrp)
	contents.appendChild(div_date)
	div_date.appendChild(ddate)
	div_date.appendChild(date)
	contents.appendChild(div_descrp)
	select.appendChild(opt1)
	select.appendChild(opt2)
	select.appendChild(opt3)
	div_prio.appendChild(prioh)
	div_prio.appendChild(select)
	contents.appendChild(div_prio)
	div_btn.appendChild(submit)
	contents.appendChild(div_btn)
	sel.appendChild(contents)

	//document.getElementById('todo_contents').style.display = 'none'
}

export const add_notes = (selector)=>{
	const sel = document.querySelector(selector)
	const note_div = document.createElement('div')
	const h4 = document.createElement('h4')
	const notes = document.createElement('textarea')
	const submit = document.createElement('button')
	submit.type = 'submit'
	submit.textContent = 'Add notes'
	h4.textContent = 'Add Notes (Optional)'
	note_div.classList.add('notes')
	note_div.appendChild(h4)
	note_div.appendChild(notes)
	note_div.appendChild(submit)
	sel.appendChild(note_div)
}


