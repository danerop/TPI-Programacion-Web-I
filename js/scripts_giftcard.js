// Destinatario
function mostrarNombre() {
    var nombre = document.getElementById("nombre").value;
    var destinatario = document.getElementById("destinatario");
    if(nombre.length < 20) {
        destinatario.innerHTML = nombre;
    }
}

// Color
$("input[name=color]").change(
    function() {
        $(".div-dos").css("color", this.value);
    }
);

// Tamaño de fuente
$("input[name=tfuente]").change(
    function() {
        $(".div-dos").css("fontSize", this.value);
        $("#destinatario").css("fontSize", this.value);
    }
);

// Monto
var regexCampoNumerico = /^[0-9]+[,.]{1}[0-9]+$/;
function mostrarMonto() {
    var monto = document.getElementById("monto").value;
    var mensaje = document.getElementById("mensaje");
    if(regexCampoNumerico.test(monto)) {
        var precio = document.getElementById("val-precio");
        precio.innerHTML = monto;
        $("#mensaje").hide();
    }
    else {
        $("#mensaje").show();
        mensaje.innerHTML = "<p>*Solo se pueden ingresar un valor numerico, que contenga una , o .</p>"
    }
}
// Validacion de campo "monto"
function validar() {
    
    if(regexCampoNumerico.test(document.getElementById("monto").value)) {
        return true;
    }
    else {
        return false;
    }
}

// Ubicacion
$("input[name=ubicacion]").change(
    function() {
        $(".lateral_izquierdo article").css("position", "relative");
        if(this.value == 1){
            $(".div-dos").css("align-items", "flex-start");
            $(".div-dos").css("justify-content", "flex-end");
        }
        else if(this.value == 2){
            $(".div-dos").css("align-items", "flex-start");
            $(".div-dos").css("justify-content", "flex-start");
        }
        else if(this.value == 3){
            $(".div-dos").css("align-items", "flex-end");
            $(".div-dos").css("justify-content", "flex-start");
        }
        else if(this.value == 4){
            $(".div-dos").css("align-items", "flex-end");
            $(".div-dos").css("justify-content", "flex-end");
        }
    }
);

// Fondo
$("input[name=fondo]").change(
    function() {
        if(this.value == 1){
            $(".lateral_izquierdo article").css("background", "url(../img/giftcard/fondo01.jpg)");
        }
        else if(this.value == 2){
            $(".lateral_izquierdo article").css("background", "url(../img/giftcard/fondo02.jpg)");
        }
        else if(this.value == 3){
            $(".lateral_izquierdo article").css("background", "url(../img/giftcard/fondo03.jpg)");
        }
        else if(this.value == 4){
            $(".lateral_izquierdo article").css("background", "url(../img/giftcard/fondo04.jpg)");
        }
        else if(this.value == 5){
            $(".lateral_izquierdo article").css("background", "url(../img/giftcard/fondo05.jpg)");
        }
        $(".lateral_izquierdo article").css("background-size", "cover");
    }
);
