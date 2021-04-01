const BotaoConcluido = ()=>{
    const botaoConcluido = document.createElement('button');

    botaoConcluido.classList.add('check-button');
    botaoConcluido.innerText = "Concluir";
    botaoConcluido.addEventListener('click', concluirTarefa);

    return botaoConcluido;
}

const concluirTarefa = (event) => {

    const botaoConcluido = event.target;

    const tarefaCompleta = botaoConcluido.parentElement;

    tarefaCompleta.classList.toggle('done');
}

export default BotaoConcluido;