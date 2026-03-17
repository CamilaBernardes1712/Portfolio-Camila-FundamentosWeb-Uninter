//Validação do Formulário de Contato //

document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('formContato');

    //  Executa apenas se o formulário existir na página atual - evita erros em outras páginas
    if (form) {
        form.addEventListener('submit', function(event) {
            // Impede o recarregamento da página ao clicar em enviar
            event.preventDefault();

            // Captura os valores dos campos
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

       
            if (nome === "" || email === "" || mensagem === "") {
                alert("Preencha todos os campos obrigatórios!");
                return; 
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Por favor, insira um e-mail válido!");
                return;
            }

            console.log("Dados enviados:", { nome, email, mensagem });

            // Exibe mensagem de confirmação
            alert("Mensagem enviada com sucesso!");

            // Limpa os campos após o envio
            form.reset();
        });
    }
});

