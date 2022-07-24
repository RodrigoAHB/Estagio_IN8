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
let logo = document.getElementById('logo')


// data
registerBirth.value

// Event Listeners
register.addEventListener('click', submit)
logo.addEventListener('click', home)



// Functions
function home(){
	
}

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
	let td;
	let newTr = document.createElement('tr')
	for(i=1; i<=5; i++){
		td = document.createElement('td')
		if(i==1){
			td.className = 'numeros'
			td.innerText = row
		} else if(i==2){
			td.innerText = registerName.value
		} else if(i==3){
			td.innerText = registerEmail.value
		} else if(i==4){
			td.innerText = registerBirth.value
		} else if(i==5){
			td.className = 'telefone'
			td.innerText = registerPhone.value
		}
		newTr.appendChild(td)
	}
	tabela.appendChild(newTr)
}

