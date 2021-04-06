const BotaoDeletar = (atualiza, id) =>{
    const botaoDeletar = document.createElement('button');

    botaoDeletar.innerText = "Deletar";
    botaoDeletar.addEventListener('click', () =>deletarTarefa(atualiza, id));
    return botaoDeletar;
}

const deletarTarefa = (atualiza, id) => {
    const index = id;
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || [];

    tarefasCadastradas.splice(index, 1)
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));
    atualiza();
}

export default BotaoDeletar;