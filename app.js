
// ===== Elementos =====
const form = document.getElementById("formPrincipal");
const campoTarefa = document.getElementById("tarefa");
const listaTarefas = document.getElementById("listaTarefas");

// ===== Adicionar tarefa =====
function adicionarTarefa(texto) {
    const tarefa = texto.trim();

    // Impede tarefas vazias
    if (!tarefa) {
        campoTarefa.focus();
        return;
    }

    // Cria o elemento
    const li = document.createElement("li");

    const textoTarefa = document.createElement("span");
    textoTarefa.textContent = tarefa;

    // Cria o botão de excluir
    const botaoExcluir = document.createElement("button");

    botaoExcluir.type = "button";
    botaoExcluir.className = "close";
    botaoExcluir.textContent = "×";
    botaoExcluir.setAttribute("aria-label", `Excluir tarefa: ${tarefa}`);

    // Evita marcar a tarefa como concluída ao excluir
    botaoExcluir.addEventListener("click", (evento) => {
        evento.stopPropagation();
        li.remove();
    });

    // Marca e desmarca a tarefa
    li.addEventListener("click", () => {
        li.classList.toggle("checked");
    });

    // Monta a tarefa
    li.appendChild(textoTarefa);
    li.appendChild(botaoExcluir);

    listaTarefas.appendChild(li);

    campoTarefa.value = "";
    campoTarefa.focus();
}

// ===== Formulário =====
form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    adicionarTarefa(campoTarefa.value);
});

// ===== Tarefas iniciais =====
document.querySelectorAll("#listaTarefas li").forEach((li) => {
    const texto = li.textContent.trim();

    li.textContent = "";

    const textoTarefa = document.createElement("span");
    textoTarefa.textContent = texto;

    const botaoExcluir = document.createElement("button");

    botaoExcluir.type = "button";
    botaoExcluir.className = "close";
    botaoExcluir.textContent = "×";
    botaoExcluir.setAttribute("aria-label", `Excluir tarefa: ${texto}`);

    botaoExcluir.addEventListener("click", (evento) => {
        evento.stopPropagation();
        li.remove();
    });

    li.addEventListener("click", () => {
        li.classList.toggle("checked");
    });

    li.appendChild(textoTarefa);
    li.appendChild(botaoExcluir);
});