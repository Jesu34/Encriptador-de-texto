const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");

function mostrarAviso(mensaje) {
    aviso.classList.add("aviso-activo");
    aviso.textContent = mensaje;

    setTimeout(() => {
        aviso.classList.remove("aviso-activo");
    }, 1500);
}

function normalizarTexto(texto) {
    return texto
        .normalize("NFD")
        .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "")
        .toLowerCase();
}

function encriptarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

btnEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let textoNormalizado = normalizarTexto(texto);

    if (texto === "") {
        mostrarAviso("El campo de texto no debe estar vacío");
    } else if (texto !== textoNormalizado) {
        mostrarAviso("No debe tener acentos y caracteres especiales");
    } else {
        let textoEncriptado = encriptarTexto(textoNormalizado);
        respuesta.textContent = textoEncriptado;
        btnCopiar.style.visibility = "visible";
    }
});

btnDesencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let textoNormalizado = normalizarTexto(texto);

    if (texto === "") {
        mostrarAviso("El campo de texto no debe estar vacío");
    } else if (texto !== textoNormalizado) {
        mostrarAviso("No debe tener acentos y caracteres especiales");
    } else {
        let textoDesencriptado = desencriptarTexto(textoNormalizado);
        respuesta.textContent = textoDesencriptado;
        btnCopiar.style.visibility = "visible";
    }
});

btnCopiar.addEventListener("click", (e) => {
    e.preventDefault();
    let textoCopiar = respuesta.textContent;
    navigator.clipboard.writeText(textoCopiar);
});
