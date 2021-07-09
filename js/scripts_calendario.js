$(document).ready(function() {
    //activa el calendario según las caracteristicas dadas
    $("#calendar").fullCalendar({
        defaultDate: moment().format("YYYY-MM-DD"),
        editable: true,
        eventLimit: true,
        eventColor: "green", //Todos los eventos tendran este color por defecto
        events:[
            {
                title: "FERIADO NACIONAL",
                start: "2021-07-09",
                color: "red" //pinta de color rojo este evento
            },
            {
                title: "Nuevo curso de GIT",
                url: "index.html",
                start: "2021-07-15"
            },
            {
                title: "Inicio de curso de Excel",
                start: "2021-08-01"
            },
            {
                title: "Actualización del curso de HTML, CSS",
                url: "curso.html",
                start: "2021-07-26" 
            },
            {
                title: "Inicio de curso de Piano",
                url: "curso.html",
                start: "2021-08-28"
            },
            {
                title: "Inicio de curso de Adobe Photoshop",
                url: "curso.html",
                start: "2021-09-6"
            }
        ]
    });
});