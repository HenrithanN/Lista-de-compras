const BotaoConcluido = (atualiza, id)=>{
    const botaoConcluido = document.createElement('button');

    botaoConcluido.classList.add('check-button');
    botaoConcluido.innerText = "Concluir";
    botaoConcluido.addEventListener('click',()=> concluirTarefa(atualiza, id));

    return botaoConcluido;
}

const concluirTarefa = (atualiza, id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida;

    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));

    atualiza();
}

export default BotaoConcluido;