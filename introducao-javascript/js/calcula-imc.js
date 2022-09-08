var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente'); 

for(i = 0; i < pacientes.length; i++) {

var paciente = pacientes[i];

var tdAltura = paciente.querySelector(".info-altura");
var tdPeso = paciente.querySelector(".info-peso");
var tdImc = paciente.querySelector(".info-imc");


var altura = tdAltura.textContent;
var peso = tdPeso.textContent;

let alturaEhValida = validaAltura(altura);
let pesoEhValido = validaPeso(peso);

if (!pesoEhValido) {
    console.log("Peso inválido!");
    tdPeso.textContent = "Peso inválido!";
    pesoEhValido = false;
    paciente.classList.add("paciente-invalido");

}

if (!alturaEhValida) {
    console.log("Altura inválida!");
    tdAltura.textContent = "Altura inválida!";
    alturaEhValida = false;
     paciente.classList.add("paciente-invalido");
}

if (alturaEhValida && pesoEhValido) {

    let imc = calculaIMC(peso,altura);
    tdImc.textContent = imc;    
} else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
}

}; 

function validaPeso(peso) {
	if(peso >= 0 && peso < 1000){
		return true;
	} else {
		return false;
	}
};

function validaAltura(altura){
	if(altura >= 0 && altura <= 3.0) {
		return true; 
	} else {
		return false;
	}
};

function calculaIMC(peso,altura) {
	let imc = 0;

	imc = peso / (altura*altura);

	return imc.toFixed(2); 
}