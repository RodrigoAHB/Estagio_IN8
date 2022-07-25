// máscara telefone
$(document).ready(function(){
	$("#phone").mask("(99) 99999-9999");
});

let row = 0;
let register = document.getElementById('cadastrar-btn')
let registerName = document.getElementById('name')
let registerEmail = document.getElementById('email')
let registerBirth =	document.getElementById('birthdate')
let registerPhone = document.getElementById('phone')
let tabela = document.getElementById('tableBody')
let logo = document.getElementById('logo')
let logoTablet = document.getElementById('logo-tablet')
let hamburgerTablet = document.getElementById('hamburger-tablet')
let hamburgerMobile = document.getElementById('hamburger-mobile')
let hamburgerOpen = document.querySelector('.hamburguer-menu')
let hamburgerLi = document.querySelector('#hamburger-menu-mobile')
let hamburgerClose = document.querySelector('.hamburguer-open')
let registerLI = document.querySelector('.registerLI')
let aboutMeLI = document.querySelector('.aboutMeLI')
let listLI = document.querySelector('.listLI')
let tabelaNavigation = document.getElementById('table-navigation')


// Event Listeners
register.addEventListener('click', submit)
logo.addEventListener('click', home)
logoTablet.addEventListener('click', home)
hamburgerMobile.addEventListener('click', openMenu)
hamburgerTablet.addEventListener('click', openMenu)
hamburgerClose.addEventListener('click', closeMenu)
registerLI.addEventListener('click', closeMenu)
aboutMeLI.addEventListener('click', closeMenu)
listLI.addEventListener('click', closeMenu)
btns = addEventListener('click', active)

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
		createTableNavigation()
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

function openMenu(){
	hamburgerOpen.style.display = 'block'
	hamburgerLi.style.display = 'block'
}

function closeMenu(){
	hamburgerOpen.style.display = 'none'
	hamburgerLi.style.display = 'none'
}

function createTableNavigation(){
	const button = document.createElement('button')
	button.className="btn"
	
	const desiredIndex = tabela.children.length - 1

	button.addEventListener('click', () => {
		const tableRows = [...tabela.children]
		const numberOfTableRows = tableRows.length
		
		for (let i = 0; i < numberOfTableRows; i++) {
			tableRows[i].style.display = 'none'
		}

		tableRows[desiredIndex].style.display = ''
	})

	button.innerHTML = tabela.children.length;

	tabelaNavigation.appendChild(button)
}
