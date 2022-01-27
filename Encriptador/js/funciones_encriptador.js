//funcion para limpiar texto de un input
function limpiarTexto() {
    document.getElementById("mensaje").value = "";

}

//funcion para cortar texto y agregarlo al portapapeles
function copiarTexto() {
    // var texto = document.getElementById("mensaje2");
    // texto.select();
    // document.execCommand("cut");
    var copiarTexto = document.getElementById("mensaje2");
    copiarTexto.select();
    copiarTexto.setSelectionRange(0,9999);
    navigator.clipboard.writeText(copiarTexto.value);
    limpiarTexto();
    
}


//CODIGO PARA ENCRIPTAR TEXTO

//Declaracion arreglo que contendra las vocales que se cambiaran
var arreglo_vocales = ["a","e","i","o","u"];

//funcion para insertar texto en el elemento textarea
function insertarTextarea (texto) {

    document.getElementById("mensaje2").value = texto;
    
}

//funcion para encriptar texto
function encriptarTexto(texto) {

    //Declaracion variable string que almacenara el texto encriptado
    var cadena_encriptada = "";

    //Declaracion arreglo que contendra las codigos para encriptar
    var codigos = ["ai","enter","imes","ober","ufat"];


    //loop con condiciones para encriptar texto
    for (var n = 0; n < texto.length; n++) {

        if (texto.charAt(n) == arreglo_vocales[0]) {
            cadena_encriptada = cadena_encriptada + codigos[0];
        }
        else if (texto.charAt(n) == arreglo_vocales[1]) {
            cadena_encriptada = cadena_encriptada + codigos[1];
        }
        else if (texto.charAt(n) == arreglo_vocales[2]) {
            cadena_encriptada = cadena_encriptada + codigos[2];
        }
        else if (texto.charAt(n) == arreglo_vocales[3]) {
            cadena_encriptada = cadena_encriptada + codigos[3];
        }
        else if (texto.charAt(n) == arreglo_vocales[4]) {
            cadena_encriptada = cadena_encriptada + codigos[4];
        }
        else {
            cadena_encriptada = cadena_encriptada + texto.charAt(n);
        }
    }

    insertarTextarea(cadena_encriptada);


}

//funcion para encriptar mensaje y mostrarlo en pantalla
function mostrarEncriptacion(){
    var mensaje_encriptado = document.getElementById("mensaje").value;
    
    encriptarTexto(mensaje_encriptado);
    limpiarTexto();

}



//CODIGO PARA DESENCRIPTAR TEXTO
// funcion para desencriptar texto
function desencriptarTexto(texto) {
    //Declaracion variable string que almacenara el texto desencriptado 
    var cadena_desencriptada = texto;
    //Declaracion arreglo que almacenara los codigos que seran reemplazados
    var codigos_regex = [/ai/g,/enter/g,/imes/g,/ober/g,/ufat/g];

    // loop con condicional para reemplazar los codigos por vocales
    for (var i = 0; i < 5; i++) {
        cadena_desencriptada = cadena_desencriptada.replace(codigos_regex[i],arreglo_vocales[i]);
    }

    insertarTextarea(cadena_desencriptada);

}

//funcion para desencriptar mensaje y mostrarlo en pantalla
function mostrarDesencriptacion(){
    var mensaje_desencriptado = document.getElementById("mensaje").value;
    
    desencriptarTexto(mensaje_desencriptado);
    limpiarTexto();

}
// Declaracion de elementos input-button
var boton_encriptador = document.getElementById("encriptador");
var boton_desencriptador = document.getElementById("desencriptador");
var boton_copiar = document.getElementById("copy");

// Ejecucion al hacer click en los botones
boton_encriptador.onclick = mostrarEncriptacion;
boton_desencriptador.onclick = mostrarDesencriptacion;
boton_copiar.onclick = copiarTexto;




