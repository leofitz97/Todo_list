
import { todo } from "./todo"




var flag;

export const maiin =(selector)=>{

	const container = document.querySelector('#container')
	const hold = document.querySelector('#hold')
	const nav = document.querySelector('#nav-bar')
	const main = document.createElement('div')
	const project = document.createElement('div')
	const project_btn = document.createElement('button')
	main.classList.add('main')

	project_btn.classList.add('add_task')
	project.id = 'project_nav'
	project_btn.textContent = 'Project'
	project.appendChild(project_btn)
	nav.appendChild(project)
	hold.appendChild(nav)
	hold.appendChild(main)
	container.appendChild(hold)
	return main
}

export const load_project =()=>{

	const project = document.createElement('div')
	const project_btn = document.createElement('button')
	const inputProj = document.createElement('input')
	const btn = document.createElement('button')
	const wrap = document.createElement('div')
	wrap.id = 'new-project'
	btn.type = 'button'
	btn.innerText = 'Create Project'
	inputProj.type = 'text'
	inputProj.id = 'input-proj'
	inputProj.placeholder = 'What event todo'
	project_btn.classList.add('add_task')
	project.id = 'project_nav'
	btn.id = 'create-project'
	btn.onclick = function(){add_project()}
	project_btn.textContent = 'Project'
	wrap.hidden = true
	project_btn.onclick = function(){open()}
	wrap.appendChild(inputProj)
	wrap.appendChild(btn)
	
	project.appendChild(project_btn)
	project.appendChild(wrap)
	return project
}

export const main =()=>{
	const hold = document.querySelector('#hold')
	const mymain= document.createElement('div')
	mymain.id = 'main'
	hold.appendChild(mymain)
}

const open=()=>{
	if (flag===1){document.getElementById('new-project').hidden = true
		flag =0}
	else {document.getElementById('new-project').hidden = false
		flag = 1}
}

const add_project=()=>{
	document.getElementById('new-project').hidden = true
	flag =0
}