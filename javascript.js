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

//CADASTRAR


//PESQUISAR

const btnPesquisar = document.querySelector('.btn-pesquisar');
        //const btnCancelar = document.querySelector('.btn-limpar');
        
btnPesquisar.addEventListener('click', function () {
    const nomeSerie = document.getElementById('serie-input').value;
    const temporada = document.getElementById('season-input').value;
    const episodio = document.getElementById('episode-input').value;
            
// Chamar a função que realiza a pesquisa e exibe os resultados
    realizarPesquisa(nomeSerie, temporada, episodio);
});









    

