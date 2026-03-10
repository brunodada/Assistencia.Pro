// Ano automático no rodapé
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Formulário rápido -> monta mensagem para WhatsApp
const quickForm = document.getElementById("quick-form");
const whatsappNumber = "5599999999999"; // Altere para o seu número com DDI + DDD

if (quickForm) {
  quickForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = quickForm.nome.value.trim();
    const equipamento = quickForm.equipamento.value.trim();
    const problema = quickForm.problema.value.trim();

    const mensagem = `Olá, meu nome é ${nome}.\nGostaria de um orçamento.\n\nEquipamento: ${equipamento}\nProblema: ${problema}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(url, "_blank");
  });
}

// Formulário de contato -> apenas exemplo simples (alert)
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = contactForm.nome.value.trim();

    alert(
      `Obrigado, ${nome}! Recebemos sua mensagem e retornaremos em breve pelo WhatsApp ou e-mail.`
    );

    contactForm.reset();
  });
}

