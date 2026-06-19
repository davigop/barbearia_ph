const perguntas = document.querySelectorAll(".faq-question");

perguntas.forEach(pergunta => {
    pergunta.addEventListener("click", () => {

        const resposta = pergunta.nextElementSibling;

        if (resposta.style.display === "block") {
            resposta.style.display = "none";
        } else {
            resposta.style.display = "block";
        }

    });
});