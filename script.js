// Ano automático no rodapé
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Formulário rápido -> monta mensagem para WhatsApp
const quickForm = document.getElementById("quick-form");
const whatsappNumber = "5551997565042"; // Altere para o seu número com DDI + DDD

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

// Formulário de contato -> envia para serviço de e-mail (Formspree)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdzgyla"; // troque pelo seu endpoint

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);

    fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao enviar formulário");
        }
        alert(
          "Mensagem enviada com sucesso! Vamos responder em breve no seu e-mail."
        );
        contactForm.reset();
      })
      .catch(() => {
        alert(
          "Não foi possível enviar sua mensagem agora. Tente novamente em alguns instantes."
        );
      });

  });
}
