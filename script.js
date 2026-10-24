
const formularioJogo = document.querySelector(".agenda-formulario");

if (formularioJogo) {
    const botaoAgendamento = formularioJogo.querySelector(".botao-agenda");

    botaoAgendamento.disabled = false;
    botaoAgendamento.textContent = "Solicitar agendamento pelo WhatsApp";
    botaoAgendamento.style.opacity = "1";
    botaoAgendamento.style.cursor = "pointer";

    botaoAgendamento.addEventListener("click", function () {
        const data = document.querySelector("#data-jogo").value;
        const horario = document.querySelector("#horario-jogo").value;
        const nome = document.querySelector("#nome-jogo").value.trim();
        const whatsapp = document.querySelector("#whatsapp-jogo").value.trim();

        if (!data || !horario || !nome || !whatsapp) {
            alert("Por favor, preencha todos os campos antes de continuar.");
            return;
        }

        const dataFormatada = data.split("-").reverse().join("/");

        const mensagem =
            "Olá! Gostaria de solicitar um agendamento para Jogo de Búzios.\n\n" +
            "Nome: " + nome + "\n" +
            "Meu WhatsApp: " + whatsapp + "\n" +
            "Data desejada: " + dataFormatada + "\n" +
            "Horário desejado: " + horario + "\n" +
            "Modalidade: Presencial\n" +
            "Duração: 1 hora\n\n" +
            "Estou ciente de que o horário depende de confirmação pela Casa de Lei e de que o sinal via Pix será informado para concluir a reserva.";

        const numeroCasa = "5511986005002";
        const link = "https://wa.me/" + numeroCasa +
            "?text=" + encodeURIComponent(mensagem);

        window.open(link, "_blank");
    });
}
