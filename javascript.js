// Captura o elemento do formulário pelo ID
const formCadastrar = document.getElementById('form-cadastrar');
const formEditar = document.getElementById('form-editar');
const formPesquisar = document.getElementById('form-pesquisar');

// Captura o botão de cancelar pelo ID
const btnCancelar = document.querySelector('.btn-cancelar');



// Adiciona um evento de clique ao botão de cancelar
btnCancelar.addEventListener('click', function (event) {
    event.preventDefault();
    formCadastrar.reset();
});

btnCancelar.addEventListener('click', function (event) {
    event.preventDefault();
    formEditar.reset();
});

btnCancelar.addEventListener('click', function (event) {
    event.preventDefault();
    formPesquisar.reset();
});









    

