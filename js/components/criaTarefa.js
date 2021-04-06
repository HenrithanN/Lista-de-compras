import BotaoConcluido from './concluirTarefa.js';
import BotaoDeletar from './deletarTarefa.js';
import {carregaTarefa} from './carregaTarefa.js'
/*
Variavel $ como abreviação para o comando document.querySelector
Ja que o mesmo será utilizado varias vezes.
*/
export const $ = document.querySelector.bind(document);
/*
Arrow Function para Criar nova tarefa
*/
export const handleNovoItem = (event) =>{

    event.preventDefault();

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const inputNovaTarefa = $('[data-form-input]');
    const valor = inputNovaTarefa.value;
    
    const calendario = $('[data-form-date]');
    const data = moment(calendario.value);
    const dataFormatada = data.format('DD/MM/YYYY');
    const horario = data.format('HH:mm');
    const concluida = false;

    const dados = {
        valor,
        dataFormatada,
        horario,
        concluida
    }

    const tarefasAtualizadas = [...tarefas, dados];

    localStorage.setItem("tarefas",JSON.stringify(tarefasAtualizadas));
    inputNovaTarefa.value=" ";
    
carregaTarefa();
}
export const NovaTarefa = ({valor, horario, concluida}, id) =>{

    const tarefa = document.createElement('li');
    const conteudo = `<p class="content">${horario} | ${valor}</p>`;

    if (concluida) {
        tarefa.classList.add('done');
    }
    tarefa.classList.add('task');

    tarefa.innerHTML = conteudo;
    
    tarefa.appendChild(BotaoConcluido(carregaTarefa, id));
    tarefa.appendChild(BotaoDeletar(carregaTarefa, id));

    return tarefa
    
}
