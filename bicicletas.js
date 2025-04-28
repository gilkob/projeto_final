console.log("teste");
const botoes = document.querySelectorAll("#nav-principal a");
function botao(botao) {
  const urlAtual = document.location.href;
  const href = botao.href;

  if (urlAtual.includes(href)) {
    botao.classList.add("active");
  }
  else {
    botao.classList.add("header");
  }
}
botoes.forEach(botao);

//perguntas frequentes

const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => { 
  const questionButton = item.querySelector(".faq-question");
  const answerDiv = item.querySelector(".faq-answer");
  const arrowSpan = questionButton.querySelector(".arrow");

  questionButton.addEventListener("click", () => {
    const isExpanded =
      questionButton.getAttribute("aria-expanded") === "true";
    if (!isExpanded) {
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem
            .querySelector(".faq-question")
            .setAttribute("aria-expanded", "false");
          otherItem.querySelector(".faq-answer").classList.add("hidden");
          otherItem
            .querySelector(".arrow")
            ?.classList.remove("rotate-180");
        }
      });
    }

    answerDiv.classList.toggle("hidden");
    questionButton.setAttribute("aria-expanded", !isExpanded);
    arrowSpan?.classList.toggle("rotate-180");
  });
});

//galeria de imagens
const imagemPrincipal = document.getElementById("imagem-principal");
const miniatura1 = document.getElementById("miniatura-1");
const miniatura2 = document.getElementById("miniatura-2");

// Função para trocar as imagens
function trocarImagem(miniaturaClicada) {
  // Guarda o src atual da imagem principal
  const srcPrincipalAtual = imagemPrincipal.src;
  // Guarda o src da miniatura clicada
  const srcMiniaturaClicada = miniaturaClicada.src;
  // Guarda o alt atual da imagem principal


  // Define o src e alt da imagem principal com os da miniatura clicada
  imagemPrincipal.src = srcMiniaturaClicada;
 
  // Define o src e alt da miniatura clicada com os da imagem principal original
  miniaturaClicada.src = srcPrincipalAtual;
  // Atualiza o alt text também
}

// Adiciona o "ouvinte" de clique para a miniatura 1
if (miniatura1 && imagemPrincipal) {
  miniatura1.addEventListener("click", function () {
    trocarImagem(miniatura1); // Chama a função passando a miniatura 1
  });
}

// Adiciona o "ouvinte" de clique para a miniatura 2
if (miniatura2 && imagemPrincipal) {
  miniatura2.addEventListener("click", function () {
    trocarImagem(miniatura2); // Chama a função passando a miniatura 2
  });
}
