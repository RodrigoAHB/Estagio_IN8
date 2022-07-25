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
let logoTablet = document.getElementById('logo-tablet')


// Event Listeners
register.addEventListener('click', submit)
logo.addEventListener('click', home)
logoTablet.addEventListener('click', home)

// Functions
function home(){
	location.reload()
}

function submit(){
	event.preventDefault();
	if(registerBirth.value == '' || registerEmail.value == '' || registerName.value == '' || registerPhone.value == ''){
		alert('Alguma informaão está faltando, preencha o formulário novamente')
	} else {
		createTable()
		clearCadastro()
	}
}

function clearCadastro(){
	registerName.value = ''
	registerEmail.value = ''
	registerBirth.value = ''
	registerPhone.value = ''
}

function createTable(){
	const [year, month, day] = registerBirth.value.split('-')	
	const formattedDate = `${day}/${month}/${year}`
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
			td.innerText = formattedDate
		} else if(i==5){
			td.className = 'telefone'
			td.innerText = registerPhone.value
		}
		newTr.appendChild(td)
	}
	tabela.appendChild(newTr)
}
