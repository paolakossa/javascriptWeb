
	var botao = document.querySelector('.botao');
    var numero = document.querySelector('.numero');
    var tabuada = document.querySelector('.tabuada');
    var resultado = document.querySelector('.resultado');

    botao.addEventListener('click', function() {

        resultado.textContent = numero.value * tabuada.value;

    });

    function buscaElemento (seletor){

    	return  document.querySelector(seletor);
    };


	var botao = buscaElemento('.botao');
    var numero = buscaElemento('.numero');
    var tabuada = buscaElemento('.tabuada');
    var resultado = buscaElemento('.resultado');

     botao.addEventListener('click', () => {

     resultado.textContent = numero.value * tabuada.value;

    });


