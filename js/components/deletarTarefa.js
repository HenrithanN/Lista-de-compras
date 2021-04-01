const BotaoDeletar = () =>{
    const botaoDeletar = document.createElement('button');

    botaoDeletar.innerText = "Deletar";
    botaoDeletar.addEventListener('click', deletarTarefa)
    return botaoDeletar;
}

const deletarTarefa = (event) => {
    const botaoDeletar = event.target;

    const excluirTarefa = botaoDeletar.parentElement;

    excluirTarefa.remove();
    return botaoDeletar;
}

export default BotaoDeletar;