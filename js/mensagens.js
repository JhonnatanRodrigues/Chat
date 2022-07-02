let inputNovaMensagem = document.querySelector('#caixa_mensagem');
let btnNovaMensagem = document.querySelector('#btnAddMensagem');
let listaNovaMensagem = document.querySelector('#Lista_mensagem_user');

inputNovaMensagem.addEventListener('Keypress', (e) =>{
    if(e.keyCode == 13) {
        let mensagem = {
            nome: inputNovaMensagem.value,
            id: gerarId(),
        }
        addMensagem(mensagem);
    }
});

btnNovaMensagem.addEventListener('click', (e) =>{
    let mensagem = {
        nome: inputNovaMensagem.value,
        id: gerarId(),
    }
    addMensagem(mensagem);
});

function gerarId(){
    return Math.floor(Math.random() * 3000);
}

function addMensagem(mensagem){
    let li = criarTagLI(mensagem);
    listaNovaMensagem.appendChild(li);
    inputNovaMensagem.value = '';
}

function criarTagLI(mensagem){
    let li = document.createElement('li');

    let p = document.createElement('p');
    p.classList.add('user_mensagem');
    p.innerHTML = mensagem.nome;

    let div = document.createElement('div');

    let h4 = document.createElement('h4');
    h4.classList.add('mensagemDe');
    h4.innerHTML = 'Você diz:';

    div.appendChild(h4);
    li.appendChild(div);
    li.appendChild(p);
    
    return li;
}