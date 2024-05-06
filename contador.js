const textoArea = document.getElementById("texto");
const resultadoCaracteres = document.getElementById("numCaracteres");
const resultadoPalavras = document.getElementById("numPalavras");
const resultadoEspacos = document.getElementById("numEspacos");

textoArea.addEventListener("input", () => {
    const texto = textoArea.value;
    
    const numCaracteres = texto.replace(/\s/g, '').length;
    resultadoCaracteres.textContent = numCaracteres;

    const palavras = texto.match(/\S+/g) || [];
    const numPalavras = palavras.length;
    resultadoPalavras.textContent = numPalavras;

    const numEspacos = texto.match(/ /g)?.length || 0;
    resultadoEspacos.textContent = numEspacos;
});

const botaoLimpar = document.getElementById("limparTexto");
botaoLimpar.addEventListener("click", () => {
    
    textoArea.value = "";
    resultadoCaracteres.textContent = 0;
    resultadoPalavras.textContent = 0;
    resultadoEspacos.textContent = 0;
});
