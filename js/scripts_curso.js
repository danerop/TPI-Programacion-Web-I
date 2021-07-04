$(document).ready(function() 
{
    //ACORDEON DE CONTENIDOS
    $('.contenidos_del_curso').on('click', '.primer_renglon', function(){
        $(this).next('.renglones_ocultos').slideToggle("fast");
    });
});

