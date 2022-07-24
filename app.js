// máscara telefone
$(document).ready(function(){
	$("#phone").mask("(99) 99999-9999");
});

let row = 1;
let register = document.getElementById('cadastrar-btn')
let registerName = document.getElementById('name')
let registerEmail = document.getElementById('email')
let registerBirth =	document.getElementById('birthdate')
let registerPhone = document.getElementById('phone')
let tabela = document.getElementById('tableBody')


register.addEventListener('click', submit)

function submit(){
	event.preventDefault();
	createTable()
	clearCadastro()
}

function clearCadastro(){
	registerName.value = ''
	registerEmail.value = ''
	registerBirth.value = ''
	registerPhone.value = ''
}

function createTable(){
	row+=1;
	let newTr = document.createElement('tr')
	let td1 = document.createElement('td')
	let td2 = document.createElement('td')
	let td3 = document.createElement('td')
	let td4 = document.createElement('td')
	let td5 = document.createElement('td')
	td1.className = 'numeros'
	td5.className = 'telefone'
	newTr.appendChild(td1)
	newTr.appendChild(td2)
	newTr.appendChild(td3)
	newTr.appendChild(td4)
	newTr.appendChild(td5)
	tabela.appendChild(newTr)
	addTableValue(td1, td2, td3, td4, td5)
	console.log(tabela)
}

function addTableValue(td1, td2, td3, td4, td5){
	td1.innerText = row
	td2.innerText = registerName.value
	td3.innerText = registerEmail.value
	td4.innerText = registerBirth.value
	td5.innerText = registerPhone.value
}








// function createTable(){
// 	row+=1;
// 	let newTr = document.createElement('tr')
// 	let td1 = document.createElement('td')
// 	let td2 = document.createElement('td')
// 	let td3 = document.createElement('td')
// 	let td4 = document.createElement('td')
// 	let td5 = document.createElement('td')
// 	td1.className = 'numeros'
// 	td5.className = 'telefone'
// 	newTr.appendChild(td1)
// 	newTr.appendChild(td2)
// 	newTr.appendChild(td3)
// 	newTr.appendChild(td4)
// 	newTr.appendChild(td5)
// 	tabela.appendChild(newTr)
// 	addTableValue(td1, td2, td3, td4, td5)
// 	console.log(tabela)
// }