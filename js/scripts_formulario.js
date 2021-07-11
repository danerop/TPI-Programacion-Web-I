function calcularSueldo(){
    var num = 0;

    $('.formulario1').each(function(){
        num++;
    });
    $("#valor_total").html("$ "+num*1000+".-");
}

$(document).ready(function(){
    calcularSueldo();
    $("#agregar").click(function(){
        var pivot= $(".formulario1").last();
        //clonamos
        var clon= $(".formulario1").first().clone();
        //limpiamos los inputs
        $(clon).children().val("");
        //insertamos
        $(clon).clone().insertAfter(pivot);
        calcularSueldo();
    })
});

$(document).on("click",".eliminar",function(){
    var padre =$(this).parent(); 
    var pivot= $(".formulario1").first();
    
    if( $(".formulario1").toArray().length > 3 ){ //verifica que la cantidad de personas sea mayor a 3
        if(!padre.is(pivot)){
            padre.remove();
        }else{
            padre.children().val("");
        }
        calcularSueldo(); 
    }
}) 

$(document).ready(function(){
    //Modal
    var modal = document.getElementById("myModal");

    // Obtén el botón que abre el modal
    var btn = document.getElementById("insc");

    // Obtiene el elemento <span> que cierra el modal
    var span = document.getElementsByClassName("close")[0];

    // Cuando el usuario hace clic en el botón, abre el modal 
    btn.onclick = function() {
        var contenido = "";
        var tags = ["Nombre", "Apellido", "Dni"];
        var i = 0;
        var cantPer = 1;

        $('.formulario1').each(function(){
            contenido = contenido.concat("<ul>");
            contenido = contenido.concat("<li>PERSONA "+cantPer+"</li>");
        
            $(this).find("input").each(function(){
                contenido = contenido.concat("<li>");
                contenido = contenido.concat(tags[i]+": "+$(this).val()+" ")
                contenido = contenido.concat("</li>");
                i++;
            });

            contenido = contenido.concat("</ul>");
            i=0;
            cantPer +=1;
        });

        $("#ingresar_per").html(contenido);
        modal.style.display = "block";
        return false;
    }

    // Cuando el usuario haga clic en <span> (x), cierra el modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Cuando el usuario haga clic en cualquier lugar fuera del modal, este se cierra
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});