function validar(){
    var error = 0; //contador de errores, si se mantiene en cero la función devolverá true

    //expresión regular para verificar si el telefono está escrito en formato: ****-****
    var verificarTelefono= /^[0-9]{4}\-[0-9]{4}$/;

    //expresión regular para verificar si el email está bien escrito: *****@*****.***
    var verificarEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

    var mensaje_error=""; //guarda los mensajes de error

    //verifica se ingreso un nombre y un apellido
    if( $("#nombre").val() == "" || $("#apellido").val() == "" ){
        mensaje_error+="<p>Ingrese su nombre y apellido</p>";
        error++;
    }

    //verifica que en caso de haberse ingresado un numero de telefono, que este respete el formato (****-****)
    if( $("#telefono").val() != "" && !$("#telefono").val().match(verificarTelefono) ){
        mensaje_error+="<p>El numero de telefono ingresado no es valido.</p>"
        error++;
    }

    //verifica si el email es correcto
    if( $("#email").val() == "" || !$("#email").val().match(verificarEmail) ){
        mensaje_error+="<p>Ingrese un email valido</p>";
        error++;
    }

    //verifica si hay datos en asunto
    if( $("#asunto").val()=="" ){
        mensaje_error+="<p>Ingrese un asunto</p>";
        error++;
    }

    //verifica si hay un minimo de 50 y un maximo de 1000 caracteres en el mensaje
    if( $("#mensaje").val().length < 50 || $("#mensaje").val().length > 1000){
        mensaje_error+="<p>Ingrese un mensaje con minimo de 50 caracteres y maximo 1000</p>";
        error++;
    }

    //devuelve true o false dependiendo del valor de la variable error
    if( error > 0 ){
        //borra el contenido del div #mensaje_error y guarda en él los comentarios de los errores encontrados.
        $("#mensaje_error").empty();
        $("#mensaje_error").append(mensaje_error);

        return false;
    }else{
        return true;
    }
}

function contadorCaracteres(cantidadActual){
    var max=1000;
    var min=50;
    var contador;
    
    max-=cantidadActual;
    contador = cantidadActual+" / "+max;

    //borra el contenido del div #contador_de_catacteres y le guarda el texto de contador
    $("#contador_de_caracteres").empty();
    $("#contador_de_caracteres").append(contador);

    //cambia el color del texto según la cantidad de caracteres
    if(max < 0){
        $("#contador_de_caracteres").css("color", "red");
    }else if(cantidadActual<min){
        $("#contador_de_caracteres").css("color", "black");
    }else{
        $("#contador_de_caracteres").css("color", "green");
    }
}

$(document).ready(function() {

    $(".formulario-contacto").submit(function(){
        //corre la funcion validar, si devuelve un false se cancela el envio del formulario.
        return validar();
    });

    //contador de caracteres
    $("#mensaje").keyup(function(){
        contadorCaracteres( $(this).val().length );
    });
});