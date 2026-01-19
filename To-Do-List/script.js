let listaTarefas = []

while (true) {
    alert("Menu\n 1- Adicionar tarefa\n 2- Listar tarefas\n 3- Concluir Tarefa\n 4- Remover tarefa\n 0 - Sair");

    let opcao = parseInt(prompt("Digite o número que deseja:"));

    if(opcao === 1){
        let descricao = prompt("Digite a sua tarefa:");
        listaTarefas.push(descricao);
        alert("Tarefa adicinada com sucesso!")

    }else if (opcao === 2){
        if (listaTarefas.length === 0) {
            alert("Nenhuma tarefa cadastrada")
            
        }else{
           let mensagem = ""
            for (let i = 0; i < listaTarefas.length; i++) {
                mensagem += (i + 1) + "." + listaTarefas[i] + "\n"
                alert("Tarefas:" + "\n" + mensagem)
            } 
        }
    }else if(opcao === 3){
        let concluir = parseInt(prompt("Digite a tarefa que deseja concluir: "));
        if (concluir >= 0 && concluir <= listaTarefas.length) {
            let concluida = listaTarefas.splice(concluir - 1 ,1);
            alert(`Tarefa (${concluida}) concluida com sucesso!`)
        }
    }else if (opcao === 4){
        let remover = parseInt(prompt("Digite a tarefa que deseja concluir: "));
        if (remover >= 0 && concluir <= listaTarefas.length) {
            let removida = listaTarefas.splice(remover - 1 ,1);
            alert(`Tarefa (${removida}) concluida com sucesso!`)
    }
}else if(opcao === 0){
    alert("Saindo do programa... Até logo!");
    break;
}else{
    alert("Opção inválida!")
}
}