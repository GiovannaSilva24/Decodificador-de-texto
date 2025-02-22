


const textArea = document.querySelector ('.text__area');
const mensagem = document.querySelector ('.mensagem');

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function criptografar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value ='';
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i ++) {   
       if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function descriptografar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value ='';
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i ++) {   
       if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}    

function copiar() {
    mensagem.select(); 
    document.execCommand("copy");
    
}

function ocultarMensagem() {
    const mensagem = document.querySelector('.mensagemsubtitulo');
    const paragrafo = document.querySelector('.containerparagrafo');

}