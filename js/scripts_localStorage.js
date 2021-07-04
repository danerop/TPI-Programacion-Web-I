function sumar (){
    var miStorage = window.localStorage;
    var cantidadCarrito = miStorage.getItem("carrito");
    cantidadCarrito++;
    
    $(".numero").empty();
    $(".numero").append(cantidadCarrito);

    miStorage.setItem("carrito",cantidadCarrito);
}

$(document).ready(function() 
{
    var miStorage = window.localStorage;
    var cantidadCarrito = miStorage.getItem("carrito");
    
    $(".numero").html(cantidadCarrito);

    $(".boton_inscripcion").click(function(evn){
        sumar();
    });
});