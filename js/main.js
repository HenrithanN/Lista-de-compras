import BotaoConcluido from './components/concluirTarefa.js';
import BotaoDeletar from './components/deletarTarefa.js';
/*
Variavel $ como abreviação para o comando document.querySelector
Ja que o mesmo será utilizado varias vezes.
*/
const $ = document.querySelector.bind(document);
/*
Arrow Function para Criar nova tarefa
*/
const criarNovaTarefa = (event) =>{

    event.preventDefault();

    const lista = $('[data-list]');
    const inputNovaTarefa = $('[data-form-input]');
    const valor = inputNovaTarefa.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${valor}</p>`;


    tarefa.innerHTML = conteudo;
    lista.appendChild(tarefa);
    tarefa.appendChild(BotaoConcluido());
    tarefa.appendChild(BotaoDeletar());
    inputNovaTarefa.value="";
    
}

const btnNovaTarefa = $('[data-form-button]');
btnNovaTarefa.addEventListener('click', criarNovaTarefa);