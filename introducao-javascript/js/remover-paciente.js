var tabela = document.querySelector('table');

tabela.addEventListener('dblclick', (event) => {
    event.target.parentNode.classList.add('fadeOut'); 

    setTimeout(() => {
        event.target.parentNode.remove();
  },500);
});



//pacientes.forEach((paciente) => {
   // paciente.addEventListener('dblclick', (event) => {
        //console.log('Fui clicado por um duplo clique!');
        //event.currentTarget.remove();
    //});
//});

