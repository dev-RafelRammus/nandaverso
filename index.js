document.addEventListener("DOMContentLoaded", function() {
    let nomeInput;
    
    while (true) {
        nomeInput = prompt("Digite o nome:");
        
        if (nomeInput) {
            const nomeLowerCase = nomeInput.toLowerCase();
            if (nomeLowerCase === "fernanda" || nomeLowerCase === "rafael" || nomeLowerCase === "amigos" ) {
                const form = document.querySelector("form");
                form.style.display = "block"; // Mostra o formulário se o nome for "Fernanda" ou "Rafael"
                
                const nomeSpan = document.getElementById("nome-span");
                if (nomeLowerCase === "fernanda") {
                    nomeSpan.textContent = `${nomeInput}, Meu amor`;
                } else {
                    nomeSpan.textContent = nomeInput;
                }
                
                const dataNascimentoInput = document.getElementById("data_nascimento");
                const senhaInput = document.getElementById("senha");
                
                form.addEventListener("submit", function(event) {
                    event.preventDefault(); // Impede o envio padrão do formulário
                    
                    const dataNascimento = dataNascimentoInput.value;
                    const senha = senhaInput.value;
                    
                    if (
                        ((nomeLowerCase === "fernanda" && dataNascimento === "2002-09-23") ||
                        (nomeLowerCase === "rafael" && dataNascimento === "2001-12-05"))  ||
                        (nomeLowerCase === "amigos" && dataNascimento === "2022-10-01")
                        &&
                        senha === "0110"
                    ) {
                        window.location.href = "pagina_redirecionada.html"; // Redireciona o usuário para a página
                    } else {
                        alert("Acesso negado. Verifique suas informações.");
                    }
                });
                
                break; // Sai do loop se o nome estiver correto
            }
        }
        
        alert("Bloqueado");
    }
});
