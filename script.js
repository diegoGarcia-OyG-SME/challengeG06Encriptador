const textInput = document.querySelector(".textArea");
const encriptedText = document.querySelector(".textAreaResultado");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function clickEncriptar(){
    var button = document.getElementById("myBtnCopiar"); // Variable para seleccionar el botón Copiar
    var lowercaseRegex = /^[a-z\s]+$/; // Variable para Valiación

    if (lowercaseRegex.test(textInput.value) && !(/[~`!#$%\^&*+@=\-\[\]\\';,/{}|\\":<>\?0-9]/g.test(textInput.value))) {
        const textoEncriptado = encriptar(textInput.value);
        encriptedText.value = textoEncriptado;
        textInput.value = "";
        encriptedText.style.backgroundImage = "none";
        button.style.display = "block"; // Valor Valido puede correr des-encriptador
    }else{
        encriptedText.value = "¡Hola! Parece que tu texto no cumple con los requisitos del encriptador, ya que contiene símbolos o caracteres especiales, así como números. Te recomendaría intentarlo de nuevo con un texto que solo contenga letras.";
        textInput.value = "";
        encriptedText.style.backgroundImage = "none"; // Deten el programa y alerta al usuario
    }
}

function clickDesencriptar(){
    var button = document.getElementById("myBtnCopiar"); // Variable para seleccionar el botón Copiar
    var lowercaseRegex = /^[a-z\s]+$/; // Variable para Valiación
    
    if (lowercaseRegex.test(textInput.value) && !(/[~`!#$%\^&*+@=\-\[\]\\';,/{}|\\":<>\?0-9]/g.test(textInput.value))) {
        const textoDesencriptado = desEncriptar(textInput.value);
        encriptedText.value = textoDesencriptado;
        textInput.value = "";
        encriptedText.style.backgroundImage = "none";
        button.style.display = "block";; // Valor Valido puede correr des-encriptador
    } else {
        encriptedText.value = "¡Hola! Parece que tu texto no cumple con los requisitos del des-encriptador, ya que contiene símbolos o caracteres especiales, así como números. Te recomendaría intentarlo de nuevo con un texto que solo contenga letras. ";
        textInput.value = "";
        encriptedText.style.backgroundImage = "none";; // Deten el programa y alerta al usuario
    }
   
}

function encriptar(palabra) {
    const mapeoVocal = {
      'a': 'ai',
      'e': 'enter',
      'i': 'imes',
      'o': 'ober',
      'u': 'ufat'
    };
    let palabraOriginal = palabra.toLowerCase();
    let palabraEncriptada = '';
    for (let i = 0; i < palabraOriginal.length; i++) {
      const letra = palabraOriginal[i];
      palabraEncriptada += mapeoVocal[letra] || letra;
    }
  
    return palabraEncriptada;
  }

function desEncriptar(palabraSecreta){
    let mapeoPalabra = [["ai","a"],["enter","e"],["imes","i"],["ober","o"],["ufat","u"]];
    palabraSecreta = palabraSecreta.toLowerCase();

    for(let i=0; i<mapeoPalabra.length; i++){
        if(palabraSecreta.includes(mapeoPalabra[i][0])){
            palabraSecreta = palabraSecreta.replaceAll(mapeoPalabra[i][0],mapeoPalabra[i][1])
        }
    }
    return palabraSecreta
}

function clickCopiarResultado() {
         
    // Copiar el valor al portapapeles
    navigator.clipboard.writeText(encriptedText.value)
    .then(() => {
        console.log('Texto Copiado al Portapapeles');
        mostrarMensajeCopiado();
      })
      .catch(err => {
        console.error('Fallo al Copiar: ', err);
      });
  }

  function mostrarMensajeCopiado() {
    var mensajeCopiadoConExito = document.getElementById("mensajeCopiado");
    mensajeCopiadoConExito.classList.remove("escondido");
    setTimeout(function() {
        mensajeCopiadoConExito.classList.add("escondido");
    }, 3000); // Oculta el mensaje despues de 3 segundos
  }
  